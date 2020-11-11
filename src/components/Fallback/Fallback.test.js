import { screen, render } from '@testing-library/react';

import { setup } from '../../setupTests';

import Fallback from './Fallback';

describe('Testing <Fallback />', () => {
	setup(beforeEach)(
		() => render(<Fallback error='Test Error Message' />)
	);

	test('Renders with error message', () => {
		expect(
			screen.getByText(/Test Error Message/i)
		).toBeInTheDocument();
	});
});
