import { screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../theme';
import { renderWith, setup } from '../../setupTests';
import ContextContainer from '../../containers/ContextContainer';

import Pickers from './Pickers';

describe('Testing <Pickers />', () => {
	setup(beforeEach)(
		() => renderWith(ContextContainer)(
			<ThemeProvider theme={theme}>
				<Pickers />
			</ThemeProvider>
		)
	);

	test('Pickers renders two datepickers and a button', () => {
		expect(
			screen.getByRole('textbox', {
				name: 'from'
			})
		).toBeInTheDocument();

		expect(
			screen.getByRole('textbox', {
				name: 'to'
			})
		).toBeInTheDocument();

		expect(
			screen.getByRole('button', {
				name: 'Apply'
			})
		).toBeInTheDocument();
	});
});
