import { screen } from '@testing-library/react';

import { renderWith, withTheme, withContext, setup } from '../../setupTests';

import Pickers from './Pickers';

describe('Testing <Pickers />', () => {
	setup(beforeEach)(
		() => renderWith(withTheme, withContext)(<Pickers />)

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
