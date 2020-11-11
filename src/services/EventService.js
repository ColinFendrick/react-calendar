import http from '../http-common';

import { LOCATION_ID } from '../constants';

const getAlertsForDates = ({ from, to }) => http.get(
	`v1/locations/${LOCATION_ID}/alerts?start_date=${from}&end_date=${to}&selector=%5BADAM%5D`
);

const service = {
	getAlertsForDates
};

export default service;
