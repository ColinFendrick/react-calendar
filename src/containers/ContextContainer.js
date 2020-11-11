import { AuthProvider } from '../context/AuthContext';
import { EventsProvider } from '../context/EventsContext';
import { ErrorProvider } from '../context/ErrorContext';

const ContextContainer = ({ children }) => (
	<ErrorProvider>
		<AuthProvider>
			<EventsProvider>
				{children}
			</EventsProvider>
		</AuthProvider>
	</ErrorProvider>
);

export default ContextContainer;
