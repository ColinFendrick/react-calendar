import { useEffect } from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import useAuthContext from './hooks/useAuthContext';
import { Pickers } from './components';
import theme from './theme';

const App = () => {
	const { getAndSetBearer } = useAuthContext();

	useEffect(() => (
		getAndSetBearer()
		// (async () => {
		// 	try {
		// 		await Auth.healthCheck();
		// 		const token = await Auth.getToken();
		// 		console.log(token);
		// 	} catch (e) {
		// 		console.log(e);
		// 	}
		// })()
	),
	[] // eslint-disable-line
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
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
