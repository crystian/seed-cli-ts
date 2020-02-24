import { paramsValidator } from '../src/lib/validators';
import { errors } from '../src/lib';

describe('paramsValidator: ', () => {
	test('should throw an error by empty params', () => {
		expect(() => {

			paramsValidator(['1']);

		}).toThrowError(errors.twoNumbersOnly);
	});
	test('should throw an error by odd params (1)', () => {
	});
	test('should throw an error by odd params (2)', () => {
	});
	test('should throw an error by not number params (1)', () => {
	});
	test('should throw an error by not number params (2)', () => {
	});
	test('should throw an error by not number params (3)', () => {
	});
	test('should throw an error by not number params (4) NaN', () => {
	});
	test('should send both numbers (1)', () => {
	});
	test('should send both numbers (2)', () => {
	});
	test('should send both numbers (3)', () => {
	});
});
