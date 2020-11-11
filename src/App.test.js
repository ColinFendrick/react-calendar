import { screen } from '@testing-library/react';

import { renderWith, setup } from './setupTests';

import ContextContainer from './containers/ContextContainer';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

describe('Testing <App />', () => {
	setup(beforeEach)(
		() => renderWith(BrowserRouter, ContextContainer)(<App />)
	);

	test('Shows the loading screen and nothing else', () => {
		expect(
			screen.queryByText(/Events Display/i)
		).toBeNull();
	});
});
