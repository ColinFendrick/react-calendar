import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

import ContextContainer from './containers/ContextContainer';
import theme from './theme';
import { pipe } from './helpers/generics';

const withWrapper = (Wrapper, wrapperProps = {}) => children =>
	<Wrapper {...wrapperProps}>{children}</Wrapper>;

export const withTheme = withWrapper(ThemeProvider, { theme });
export const withContext = withWrapper(ContextContainer);
export const withRouter = withWrapper(BrowserRouter);

export const renderWith = (...wrappers) => children => render(
	pipe(...wrappers)(children)
);

export const setup = (...builtins) => (...fns) =>
	builtins.forEach((builtin, ix) =>
		builtin(() =>
			fns[0].length ? fns[ix].forEach(f => f()) : fns.forEach(f => f())
		)
	);
