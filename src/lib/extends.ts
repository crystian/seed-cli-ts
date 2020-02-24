// Extends of functionality of TypeScript/JavaScript

import i18n from './i18n';

interface ErrorData {
	code: number;
	message: string;
}

/**
 * Error with custom structure to user and unit test
 */
class RuntimeError extends Error {
	code: number;

	constructor(errorData: ErrorData) {
		super();
		this.name = this.constructor.name;
		this.code = errorData.code || 1;
		this.message = `[${i18n.appName}] ${errorData.message}`;

		console.log('err');
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, RuntimeError);
		}
	}
}

(global as any).RuntimeError = RuntimeError;

