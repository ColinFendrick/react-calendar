import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

export const renderWith = (...Wrappers) => children =>
	render(
		Wrappers.reduce((curr, Wrapper) => <Wrapper>{curr}</Wrapper>, children)
	);

export const setup = (...builtins) => (...fns) =>
	builtins.forEach((builtin, ix) =>
		builtin(() =>
			fns[0].length ? fns[ix].forEach(f => f()) : fns.forEach(f => f())
		)
	);
