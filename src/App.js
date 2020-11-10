import {
	Switch,
	Route
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import { Pickers } from './components';
import theme from './theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			< CssBaseline />
			<h2>The App Lives!</h2>
			<div className='container mt-3'>
				<Switch>
					<Route path='/' exact component={Pickers} />
				</Switch>
			</div>
		</ThemeProvider>

	);
};

export default App;
