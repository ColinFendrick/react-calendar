import { useState } from 'react';
import Button from '@material-ui/core/Button';

import { DatePicker } from '..';
import useEventsContext from '../../hooks/useEventsContext';
import useErrorContext from '../../hooks/useErrorContext';

const Pickers = () => {
	const { getEvents } = useEventsContext();
	const { setError } = useErrorContext();
	const [dates, setDates] = useState({
		from: '2020-05-01',
		to: '2020-05-02'
	});

	const handleSubmit = async () => {
		try {
			await getEvents(dates);
		} catch (e) {
			setError(`${e.message}`);
		}
	};

	return (
		<>
			<div className='d-flex'>
				<DatePicker label='from' date={dates.from} set={from => setDates({ ...dates, from })}/>
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
