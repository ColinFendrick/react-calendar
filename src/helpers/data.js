import { format } from 'date-fns';

export const transform = data => {
	const days = [];

	data.forEach(({ timestamp }) => {
		const date = format(new Date(timestamp * 1000), 'MM/dd/yyyy');
		const ix = days.findIndex(day => day.x === date);
		if (ix !== -1) {
			days[ix].y = days[ix].y + 1;
		} else {
			days.push({
				x: date, y: 1
			});
		}
	});

	return days.map(({ x, y }) => ({
		x: new Date(x), y
	}));
};
