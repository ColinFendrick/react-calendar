import {
	Switch,
	Route
} from 'react-router-dom';

import { DatePicker } from './Components';

const App = () => {
	return (
		<div>
			<h2>The App Lives!</h2>
			<div className='container mt-3'>
				<Switch>
					<Route path='/' exact component={DatePicker} />
				</Switch>
			</div>
		</div>

	);
};

export default App;
