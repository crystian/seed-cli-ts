import { paramsValidator } from './validators';

export function sum(arg: string[]): string {
	paramsValidator(arg);
	return arg[0] + arg[1];
}
