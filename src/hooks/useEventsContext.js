import { useContext } from 'react';

import EventsService from '../services/EventService';
import { EventsContext } from '../context/EventsContext';

const useEventsContext = () => {
	const [events] = useContext(EventsContext);

	const getEvents = async (dates) => {
		console.log(dates.from, dates.to);
		try {
			const res = await EventsService.getAlertsForDates(dates);
			console.log(res);
		} catch (e) {
			throw new Error(e);
		}
	};

	return {
		events,
		getEvents
	};
};

export default useEventsContext;
