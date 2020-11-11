import { CanvasJSChart } from 'canvasjs-react-charts';

import { transform } from '../../helpers/data';

const Chart = ({ data }) => {
	const dataPoints = transform(data);

	const options = {
		animationEnabled: true,
		exportEnabled: true,
		theme: 'dark2',
		title: {
			text: 'Events Per Day'
		},
		axisY: {
			title: 'Events'
		},
		axisX: {
			valueFormatString: 'DD MMM'
		},
		data: [
			{
				type: 'line',
				toolTipContent: '{x}: {y} events',
				xValueFormatString: 'DD MMM',
				dataPoints
			}
		]
	};

	return <CanvasJSChart options={options} />;
};

export default Chart;
