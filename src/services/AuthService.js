import http from '../http-common';

import { CLIENT_ID, API_KEY } from '../constants';

const healthCheck = () => http.get(`/v1/ping?CLIENT_ID=${CLIENT_ID}`);

const getToken = () => http.get(
	`/oauth2/token?client_id=${CLIENT_ID}&api_key=${API_KEY}`
);

const getLocal = token => localStorage.getItem(token);

const service =  {
	healthCheck,
	getToken,
	getLocal
};

export default service;
