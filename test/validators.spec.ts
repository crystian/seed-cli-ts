import { i18n, paramsValidator } from '../src/lib';

describe('paramsValidator: ', () => {
	test('should throw an error by empty params', () => {
		expect(() => {

			paramsValidator([]);

		}).toThrowError(i18n.errors.twoNumbersOnly);
	});
	test('should throw an error by odd params (1)', () => {
		expect(() => {

			paramsValidator(['1']);

		}).toThrowError(i18n.errors.twoNumbersOnly);
	});
	test('should throw an error by odd params (2)', () => {
		expect(() => {

			paramsValidator(['1', '2', '3']);

		}).toThrowError(i18n.errors.twoNumbersOnly);
	});
	test('should throw an error by not number params (1)', () => {
		expect(() => {

			paramsValidator(['a', '2']);

		}).toThrowError(i18n.errors.twoNumbers);
	});
	test('should throw an error by not number params (2)', () => {
		expect(() => {

			paramsValidator(['1', 'a']);

		}).toThrowError(i18n.errors.twoNumbers);
	});
	test('should throw an error by not number params (3)', () => {
		expect(() => {

			paramsValidator(['a', 'a']);

		}).toThrowError(i18n.errors.twoNumbers);
	});
	test('should send both numbers', () => {
		expect(() => {

			paramsValidator(['1', '2']);

		}).not.toThrow();
	});
});
