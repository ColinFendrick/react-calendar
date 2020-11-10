import { useState } from 'react';

import { DatePicker } from '..';

const Pickers = () => {
	const [dates, setDates] = useState({
		from: '2014-08-18T21:11:54',
		to: '2020-10-10T00:00:00'
	});
	return (
		<>
			from:
			<DatePicker label='from' date={dates.from} set={from => setDates({ ...dates, from })}/>
				to:
			<DatePicker label='to' date={dates.to} set={to => setDates({ ...dates, to })}/>
		</>
	);
};

export default Pickers;
