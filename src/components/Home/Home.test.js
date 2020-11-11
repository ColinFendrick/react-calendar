import { screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../theme';
import { renderWith, setup } from '../../setupTests';
import ContextContainer from '../../containers/ContextContainer';

import Home from './Home';

describe('Testing <Home />', () => {
	setup(beforeEach)(
		() => renderWith(ContextContainer)(<ThemeProvider theme={theme}><Home /></ThemeProvider>)
	);

	test('Renders the Pickers component given no data', () => {
		expect(
			screen.getByRole('button', {
				name: 'Apply'
			})
		).toBeInTheDocument();
	});
});
