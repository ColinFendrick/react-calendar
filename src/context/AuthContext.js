import { useState, createContext, useEffect } from 'react';

import http from '../http-common';

const AuthContext = createContext([{}, () => {}]);

const AuthProvider = props => {
	const [bearer, setBearer] = useState(null);

	useEffect(
		() => {
			if (bearer) {
				http.defaults.headers.common = { 'Authorization': `Bearer ${bearer}` };
			}
		},
		[bearer]
	);

	return (
		<AuthContext.Provider value={[bearer, setBearer]}>
			{props.children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
