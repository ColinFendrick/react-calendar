import { useContext } from 'react';

import { ErrorContext } from '../context/ErrorContext';

const useErrorContext = () => {
	const [error, setError] = useContext(ErrorContext);

	return {
		error,
		setError
	};
};

export default useErrorContext;
