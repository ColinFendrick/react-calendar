import axios from 'axios';

export default axios.create({
	baseURL: 'https://appsrv.fastsensor.us:8890',
	headers: {
		'Content-type': 'application/json'
	}
});
