import { errors } from './errors';

export const paramsValidator = (arg: string[]) => {
	if (arg.length !== 2) {
		throw new Error(errors.twoNumbersOnly);
	}

	if (isNaN(+arg[0]) || isNaN(+arg[1])) {
		throw new Error(errors.twoNumbers);
	}

	return true;
};
