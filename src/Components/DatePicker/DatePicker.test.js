import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { setup } from '../../setupTests';

import DatePicker from './DatePicker';

describe('Testing <DatePicker />', () => {
	const mockFunc = jest.fn();
	setup(beforeEach)(
		() => render(
			<DatePicker
				date='2020-10-10T00:00:00'
				label='test'
				set={mockFunc}
			/>
		)
	);

	test('Renders the component and textbox', () => {
		expect(
			screen.getByRole('textbox', { name: 'test' })
		).toBeInTheDocument();

		expect(
			screen.getByRole('button', { name: 'test-change-date' })
		).toBeInTheDocument();
	});

	test('User events work', () => {
		userEvent.click(
			screen.getByRole('button', { name: 'test-change-date' })
		);
		userEvent.click(
			screen.getByText('14')
		);
		expect(mockFunc).toHaveBeenCalledWith(new Date('2020-10-14T00:00:00'));
	});
});
