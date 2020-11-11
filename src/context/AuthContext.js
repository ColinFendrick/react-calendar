import { useState, createContext, useEffect } from 'react';

import http from '../http-common';

const AuthContext = createContext([{}, () => {}]);

const AuthProvider = ({ children }) => {
	const [bearer, setBearer] = useState(null);
	const [bearerTime, setBearerTime] = useState(null);

	useEffect(
		() => {
			if (bearer) {
				localStorage.setItem('bearer', bearer);
				http.defaults.headers.common = { 'Authorization': `Bearer ${bearer}` };
			}
			if (bearerTime) {
				localStorage.setItem('bearerTime', bearerTime);
			}
		},
		[bearer, bearerTime]
	);

	return (
		<AuthContext.Provider value={[
			{ bearer, bearerTime }, { setBearer, setBearerTime }
		]}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
