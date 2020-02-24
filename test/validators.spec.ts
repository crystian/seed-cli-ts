import { argValidator } from '../src/lib/validators';

describe('validators: ', () => {
	test('should work', () => {
		expect(argValidator(['a', 'b'])).toBe(true);
	});
});
