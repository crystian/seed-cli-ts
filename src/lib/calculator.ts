import { argValidator } from './validators';

export function sum(arg: string[]): string {
	argValidator(arg);
	return arg[0] + arg[1];
}
