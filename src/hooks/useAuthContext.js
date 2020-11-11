import { useContext } from 'react';

import AuthService from '../services/AuthService';
import { AuthContext } from '../context/AuthContext';

const useAuthContext = () => {
	const [bearer, setBearer] = useContext(AuthContext);

	const getAndSetBearer = async () => {
		const localBearer = await AuthService.getLocalBearer();
		if (localBearer) {
			setBearer(localBearer);
		} else {
			try {
				const remoteBearer = await AuthService.getToken();
				setBearer(remoteBearer.data.access_token);
			} catch (e) {
				throw new Error(e);
			}
		}
	};

	return {
		bearer,
		getAndSetBearer
	};
};

export default useAuthContext;
