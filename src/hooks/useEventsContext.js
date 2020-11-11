import { useContext } from 'react';

import EventsService from '../services/EventService';
import { EventsContext } from '../context/EventsContext';

const useEventsContext = () => {
	const [events, setEvents] = useContext(EventsContext);

	const getEvents = async (dates) => {
		try {
			const res = await EventsService.getAlertsForDates(dates);

			setEvents({ ...events, data: res.data.data, description: res.data.description });
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
