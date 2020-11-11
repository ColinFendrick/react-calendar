import { Alert, AlertTitle } from '@material-ui/lab';

const Fallback = ({ error }) => (
	<Alert severity='error'>
		<AlertTitle>Error</AlertTitle>
		{error} occured — <strong onClick={() => window.location.reload()} className='cursor-pointer'>
			try reloading.
		</strong>
	</Alert>
);

export default Fallback;
