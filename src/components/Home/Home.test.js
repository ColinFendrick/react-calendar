import { screen } from '@testing-library/react';

import { renderWith, withTheme, withContext, setup } from '../../setupTests';

import Home from './Home';

describe('Testing <Home />', () => {
	setup(beforeEach)(
		// () => renderWith(ContextContainer)(<ThemeProvider theme={theme}><Home /></ThemeProvider>)
		() => renderWith(withTheme, withContext)(<Home />)
	);

	test('Renders the Pickers component given no data', () => {
		expect(
			screen.getByRole('button', {
				name: 'Apply'
			})
		).toBeInTheDocument();
	});
});
