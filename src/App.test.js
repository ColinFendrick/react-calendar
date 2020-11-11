import { screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { setup, renderWith, withContext, withRouter } from './setupTests';
import { CLIENT_ID, API_KEY  } from './constants';

import App from './App';

describe('Testing <App />', () => {
	const fakeUserResponse = { access_token: 'fake_access_token' };
	const server = setupServer(
		rest.get(
			`https://appsrv.fastsensor.us:8890/oauth2/token?client_id=${CLIENT_ID}&api_key=${API_KEY}`,
			(req, res, ctx) => res(ctx.json(fakeUserResponse))
		)
	);

	setup(beforeEach, beforeAll, afterAll)(
		[
			() => {
				window.localStorage.removeItem('bearer');
				window.localStorage.removeItem('bearerTime');
			},
			() => server.resetHandlers(),
			() => renderWith(withContext, withRouter)(<App />)
		], [
			() => server.listen(),
			jest.spyOn(console, 'error').mockImplementation(jest.fn())
		], [
			() => server.close(),
			() => {
				window.localStorage.removeItem('bearer');
				window.localStorage.removeItem('bearerTime');
			}
		]
	);

	test('Shows the loading screen and nothing else', () => {
		expect(
			screen.queryByRole('button')
		).toBeNull();
	});

	test('Logging in brings you to the main page', async () => {
		const button = await screen.findByRole('button', { name: 'Apply' });
		expect(button).toHaveTextContent(/Apply/i);
		expect(localStorage.getItem('bearer')).toEqual(fakeUserResponse.access_token);
	});
});
