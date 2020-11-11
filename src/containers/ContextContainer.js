import { AuthProvider } from '../context/AuthContext';
import { EventsProvider } from '../context/EventsContext';

const ContextContainer = ({ children }) => (
	<AuthProvider>
		<EventsProvider>
			{children}
		</EventsProvider>
	</AuthProvider>
);

export default ContextContainer;
