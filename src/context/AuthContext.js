import { useState, createContext, useEffect } from 'react';

import http from '../http-common';

const AuthContext = createContext([{}, () => {}]);

const AuthProvider = ({ children }) => {
	const [bearer, setBearer] = useState(null);

	useEffect(
		() => {
			if (bearer) {
				localStorage.setItem('bearer', bearer);
				http.defaults.headers.common = { 'Authorization': `Bearer ${bearer}` };
			}
		},
		[bearer]
	);

	return (
		<AuthContext.Provider value={[bearer, setBearer]}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
