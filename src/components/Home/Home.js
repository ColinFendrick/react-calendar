import { Pickers, Chart } from '..';
import useEventsContext from '../../hooks/useEventsContext';

const Home = () => {
	const { events } = useEventsContext();

	return (
		<>
			<Pickers />
			<br />
			{events?.data?.length ? <Chart data={events.data} /> : ''}
		</>
	);
};

export default Home;
