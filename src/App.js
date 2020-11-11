import { useEffect } from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import useAuthContext from './hooks/useAuthContext';
import { Home } from './components';
import theme from './theme';

const App = () => {
	const { getAndSetBearer } = useAuthContext();

	useEffect(() => getAndSetBearer(),
		[] // eslint-disable-line
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<h2>Events Display</h2>
			<div className='container mt-3'>
				<Switch>
					<Route path='/' exact component={Home} />
				</Switch>
			</div>
		</ThemeProvider>

	);
};

export default App;
