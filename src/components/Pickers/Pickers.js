import { useState } from 'react';
import Button from '@material-ui/core/Button';

import { DatePicker } from '..';
import useEventsContext from '../../hooks/useEventsContext';

const Pickers = () => {
	const { getEvents } = useEventsContext();
	const [dates, setDates] = useState({
		from: '2020-10-09',
		to: '2020-10-10'
	});

	const handleSubmit = async () => {
		try {
			await getEvents(dates);
		} catch (e) {
			throw new Error(e);
		}
	};

	return (
		<>
			<div className='d-flex '>
				<DatePicker label='from' date={dates.from} set={from => setDates({ ...dates, from })}/>
				<span>to</span>
				<DatePicker label='to' date={dates.to} set={to => setDates({ ...dates, to })}/>
			</div>

			<div>
				<Button variant='contained' color='primary' onClick={handleSubmit}>
					Apply
				</Button>
			</div>
		</>
	);
};

export default Pickers;
