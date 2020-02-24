import { paramsValidator } from './validators';

export function suma(arg: string[]): number {
	paramsValidator(arg);
	return +arg[0] + +arg[1];
}
