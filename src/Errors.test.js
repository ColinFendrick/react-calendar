import { screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { setup, renderWith, withContext, withRouter } from './setupTests';
import { CLIENT_ID, API_KEY  } from './constants';

import App from './App';
describe('Testing <App /> Error handling', () => {
	const server = setupServer(
		rest.get(
			`https://appsrv.fastsensor.us:8890/oauth2/token?client_id=${CLIENT_ID}&api_key=${API_KEY}`,
			(req, res, ctx) => res(
				ctx.status(500),
				ctx.json({
					message: 'Internal Server Error'
				})
			)
		)
	);

	setup(beforeEach, beforeAll, afterAll)(
		[() => server.resetHandlers(), () => renderWith(withContext, withRouter)(<App />)],
		[() => server.listen(), jest.spyOn(console, 'error').mockImplementation(jest.fn())],
		[() => server.close()]
	);

	test('Error gets handled with <Fallback />', async () => {
		const fallback = await screen.findByText(/Error: Request failed with status code 500/i);
		expect(fallback).toBeInTheDocument();
	});
});
