import DateRangePicker from 'react-bootstrap-daterangepicker';

const DatePicker = () => {
	const startDate = '1/1/2020';
	const endDate = '1/2/2020';
	return (
		<div id='daterangepicker'>
			<DateRangePicker
				initialSettings={{ startDate, endDate }}
				onApply={(e, { startDate, endDate }) => console.log(startDate, endDate)}
			>
				<input
					type='text'
					className='form-control col-4'
					name='date-range'
					id='date-range'
					aria-label='date-range'
				/>
			</DateRangePicker>
			<div>Drag and drop to select a date range</div>
		</div>
	);
};

export default DatePicker;
