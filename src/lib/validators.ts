import i18n from './i18n';

export const paramsValidator = (arg: string[]) => {
	if (arg.length !== 2) {
		throw new Error(i18n.errors.twoNumbersOnly);
	}

	if (isNaN(+arg[0]) || isNaN(+arg[1])) {
		throw new Error(i18n.errors.twoNumbers);
	}

	return true;
};
