import { useState, createContext } from 'react';

const EventsContext = createContext([{}, () => {}]);

const EventsProvider = ({ children }) => {
	const [events, setEvents] = useState({
		data: [],
		description: {}
	});

	return (
		<EventsContext.Provider value={[events, setEvents]}>
			{children}
		</EventsContext.Provider>
	);
};

export { EventsContext, EventsProvider };
