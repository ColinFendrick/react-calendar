import { useContext } from 'react';

import AuthService from '../services/AuthService';
import { AuthContext } from '../context/AuthContext';

const useAuthContext = () => {
	const [bearer, setBearer] = useContext(AuthContext);

	const getAndSetBearer = async () => {
		const res = await AuthService.getLocalBearer();
		if (res?.data?.access_token) {
			setBearer(res.data.access_token);
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
