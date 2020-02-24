import { errors } from './errors';

export const paramsValidator = (arg: string[]) => {
	console.log(arg);

	if (arg.length !== 2) {
		throw new Error(errors.twoNumbersOnly);
	}

	return true;
};
