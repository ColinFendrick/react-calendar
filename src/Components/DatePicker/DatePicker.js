
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers';

const DatePicker = ({ date, set, label }) => {

	const handleDateChange = date => {
		set(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				disableToolbar
				variant='inline'
				format='MM/dd/yyyy'
				margin='normal'
				id={`${label}-date-picker`}
				label={label}
				value={date}
				onChange={handleDateChange}
				KeyboardButtonProps={{
					'aria-label': `${label}-change-date`
				}}
			/>
		</MuiPickersUtilsProvider>
	);
};

export default DatePicker;
