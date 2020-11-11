import { screen } from '@testing-library/react';

import { renderWith, setup } from '../../setupTests';
import ContextContainer from '../../containers/ContextContainer';

import Home from './Home';

describe('Testing <Home />', () => {
	setup(beforeEach)(
		() => renderWith(ContextContainer)(<Home />)
	);

	test('Renders the Pickers component given no data', () => {
		expect(
			screen.getByRole('button', {
				name: 'Apply'
			})
		).toBeInTheDocument();
	});
});