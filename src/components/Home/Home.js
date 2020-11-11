import { Pickers, Chart } from '..';
import useEventsContext from '../../hooks/useEventsContext';

const Home = () => {
	const { events } = useEventsContext();

	return (
		<>
			<Pickers />
			{events?.data?.length ? <Chart data={events.data} /> : ''}
		</>
	);
};

export default Home;
