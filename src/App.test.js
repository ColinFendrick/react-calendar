import { screen } from '@testing-library/react';

import { renderWithRouter, setup } from './setupTests';

import App from './App';

describe('Testing <App />', () => {
	setup(beforeEach)(
		() => renderWithRouter(<App />)
	);

	test('renders the app', () => {
		expect(
			screen.getByText(/The App Lives!/i)
		).toBeInTheDocument();
	});
});
