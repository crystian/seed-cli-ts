import { paramsValidator } from '../src/lib/validators';
import { errors } from '../src/lib';

describe('paramsValidator: ', () => {
	test('should throw an error by empty params', () => {
		expect(() => {

			paramsValidator([]);

		}).toThrowError(errors.twoNumbersOnly);
	});
	test('should throw an error by odd params (1)', () => {
		expect(() => {

			paramsValidator(['1']);

		}).toThrowError(errors.twoNumbersOnly);
	});
	test('should throw an error by odd params (2)', () => {
		expect(() => {

			paramsValidator(['1', '2', '3']);

		}).toThrowError(errors.twoNumbersOnly);
	});
	test('should throw an error by not number params (1)', () => {
		expect(() => {

			paramsValidator(['a', '2']);

		}).toThrowError(errors.twoNumbers);
	});
	test('should throw an error by not number params (2)', () => {
		expect(() => {

			paramsValidator(['1', 'a']);

		}).toThrowError(errors.twoNumbers);
	});
	test('should throw an error by not number params (3)', () => {
		expect(() => {

			paramsValidator(['a', 'a']);

		}).toThrowError(errors.twoNumbers);
	});
	test('should send both numbers', () => {
		expect(() => {

			paramsValidator(['1', '2']);

		}).not.toThrow();
	});
});
