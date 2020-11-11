import { transform } from './data';

describe('Testing transform data fn', () => {
	test('Works with good data', () => {
		expect(
			transform(
				[{
					'timestamp': 1588363980,
					'alert': '[ADAM]',
					'details': '25224E04*380*210'
				}, {
					'timestamp': 1588433940,
					'alert': '[ADAM]',
					'details': '25224E04*485*205'
				}, {
					'timestamp': 1588434420,
					'alert': '[ADAM]',
					'details': '25224E04*190*225'
				}, {
					'timestamp': 1588437540,
					'alert': '[ADAM]',
					'details': '25224E04*245*275'
				}, {
					'timestamp': 1588452780,
					'alert': '[ADAM]',
					'details': '25224E04*340*270'
				}, {
					'timestamp': 1588461240,
					'alert': '[ADAM]',
					'details': '25224E04*410*225'
				}]
			)
		).toEqual([
			{ 'x': new Date('2020-05-01T07:00:00.000Z'), 'y': 1 },
			{ 'x': new Date('2020-05-02T07:00:00.000Z'), 'y': 5 }
		]);
	});

	test('Works with no data', () => {
		expect(transform([])).toEqual([]);
	});
});
