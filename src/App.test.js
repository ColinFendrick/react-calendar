import { screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { setup, renderWith } from './setupTests';
import { CLIENT_ID, API_KEY  } from './constants';

import ContextContainer from './containers/ContextContainer';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const fakeUserResponse = { access_token: 'fake_access_token' };
const server = setupServer(
	rest.get(
		`https://appsrv.fastsensor.us:8890/oauth2/token?client_id=${CLIENT_ID}&api_key=${API_KEY}`,
		(req, res, ctx) => res(ctx.json(fakeUserResponse))
	)
);

describe('Testing <App />', () => {
	setup(beforeEach, beforeAll, afterEach, afterAll)(
		[() => renderWith(ContextContainer, BrowserRouter)(<App />)],
		[() => server.listen(), jest.spyOn(console, 'error').mockImplementation(jest.fn())],
		[() => server.resetHandlers(), () => window.localStorage.removeItem('bearer')],
		[() => server.close()]
	);

	test('Shows the loading screen and nothing else', () => {
		expect(
			screen.queryByRole('button')
		).toBeNull();
	});

	test('Logging in brings you to the main page', async () => {
		const button = await screen.findByRole('button', { name: 'Apply' });
		expect(button).toHaveTextContent(/Apply/i);
		expect(window.localStorage.getItem('bearer')).toEqual(fakeUserResponse.access_token);
	});
});
