import { suma } from '../src/lib';

describe('suma: ', () => {
	test('should sum both values (1)', () => {
		expect(suma(['1', '2'])).toBe(3);
	});
	test('should sum both values (2)', () => {
		expect(suma(['0', '0'])).toBe(0);
	});
});
