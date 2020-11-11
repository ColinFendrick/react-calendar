import Typography from '@material-ui/core/Typography';

import { Pickers, Chart } from '..';
import useEventsContext from '../../hooks/useEventsContext';

const Home = () => {
	const { events } = useEventsContext();

	return (
		<>
			<Typography variant='h3'>
				Events Display
			</Typography>
			<Pickers />
			<br />
			{events?.data?.length ? <Chart data={events.data} /> : ''}
		</>
	);
};

export default Home;
