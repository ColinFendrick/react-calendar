import { useState, createContext } from 'react';

const EventsContext = createContext([{}, () => {}]);

const EventsProvider = props => {
	const [events, setEvents] = useState({
		data: [],
		description: {}
	});

	return (
		<EventsContext.Provider value={[events, setEvents]}>
			{props.children}
		</EventsContext.Provider>
	);
};

export { EventsContext, EventsProvider };
