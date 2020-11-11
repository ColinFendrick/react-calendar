import { screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { setup, renderWith, withContext, withRouter } from './setupTests';
import { CLIENT_ID, API_KEY  } from './constants';

import App from './App';

describe('Testing <App /> with local token', () => {
	setup(beforeEach, beforeAll, afterAll)(
		[
			() => {
				localStorage.setItem('bearer', 'fake-local-bearer');
				localStorage.setItem('bearerTime', new Date());
			},
			() => renderWith(withContext, withRouter)(<App />)
		], [
			jest.spyOn(console, 'error').mockImplementation(jest.fn())
		], [
			() => {
				window.localStorage.removeItem('bearer');
				window.localStorage.removeItem('bearerTime');
			}
		]
	);

	test('Uses the local bearer instead', async () => {
		await screen.findByRole('button', { name: 'Apply' });
		expect(localStorage.getItem('bearer')).toEqual('fake-local-bearer');
	});
});


describe('Testing <App/> with expired local storage', () => {
	const fakeUserResponse = { access_token: 'remote_token_yours_expired' };
	const server = setupServer(
		rest.get(
			`https://appsrv.fastsensor.us:8890/oauth2/token?client_id=${CLIENT_ID}&api_key=${API_KEY}`,
			(req, res, ctx) => res(ctx.json(fakeUserResponse))
		)
	);
	setup(beforeEach, beforeAll, afterAll)(
		[
			() => {
				localStorage.setItem('bearer', 'fake-local-bearer');
				localStorage.setItem('bearerTime', new Date(2000, 1, 1));
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
	test('Will try the server if the local token has expired', async () => {
		await screen.findByRole('button', { name: 'Apply' });
		expect(localStorage.getItem('bearer')).toEqual('remote_token_yours_expired');
	});
});
