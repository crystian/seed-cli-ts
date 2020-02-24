/*eslint no-redeclare: 0*/
declare global {
	export class RuntimeError extends Error {
		code: number;
		constructor(errorData: ErrorData);
	}

	export interface ErrorData {
		code: number;
		message: string;
	}
}

export {};
