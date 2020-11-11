import { useContext } from 'react';
import { differenceInMinutes } from 'date-fns';

import AuthService from '../services/AuthService';
import { AuthContext } from '../context/AuthContext';

const useAuthContext = () => {
	const [{ bearer }, { setBearer, setBearerTime }] = useContext(AuthContext);

	const getAndSetBearer = async () => {
		const localBearer = await AuthService.getLocal('bearer');
		const localBearerTime = await AuthService.getLocal('bearerTime');

		if (localBearer && localBearerTime && differenceInMinutes(new Date(), new Date(localBearerTime)) < 45) {
			setBearer(localBearer);
		} else {
			try {
				const remoteBearer = await AuthService.getToken();
				setBearer(remoteBearer.data.access_token);
				setBearerTime(new Date());
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
