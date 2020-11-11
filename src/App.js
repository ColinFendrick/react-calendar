import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import useAuthContext from './hooks/useAuthContext';
import useErrorContext from './hooks/useErrorContext';

import { Home, Fallback } from './components';
import theme from './theme';

const App = () => {
	const [loading, setLoading] = useState(false);
	const { getAndSetBearer } = useAuthContext();
	const { error, setError } = useErrorContext();

	useEffect(() =>
		(async () => {
			try {
				setLoading(true);
				await getAndSetBearer();
				setLoading(false);
			} catch (e) {
				setError(`${e.message}`);
				setLoading(false);
			}
		})(),
		[] // eslint-disable-line
	);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{loading ? (
				<CircularProgress />
			) : error ? <Fallback error={error} /> : (
				<>
					<div className='container mt-3'>
						<Switch>
							<Route path='/' exact component={Home} />
						</Switch>
					</div>
				</>
			)}
		</ThemeProvider>

	);
};

export default App;
