import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { setup } from '../../setupTests';

import DatePicker from './DatePicker';

describe('Testing <DatePicker />', () => {
	setup(beforeEach)(
		() => render(<DatePicker />)
	);

	test('Renders the component and textbox', () => {
		expect(
			screen.getByRole('textbox', { name: 'date-range' })
		).toBeInTheDocument();
	});

	test('User events work', () => {
		userEvent.click(screen.getByRole('textbox', { name: 'date-range' }));
		expect(screen.getByText(/Jan/i)).toBeInTheDocument();
	});
});
