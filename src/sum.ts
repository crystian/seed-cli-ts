#!/usr/bin/env node

import { i18n, sum } from './lib';

process.title = i18n.appName;

const parameters: string[] = process.argv.slice(2); // node and this file name will be removed

const timestampStart: Date = new Date();

try {

	// The main an the single entry point to your Commando Line Interface!
	const result = sum(parameters);
	console.log('Result:', result);

} catch (e) {
	console.log(`\n${e.message}\n`);
	process.exit(1);
}

const timestampEnd: Date = new Date();

console.log(`[${i18n.appName}]`, `Done in: ${(timestampEnd.valueOf() - timestampStart.valueOf()) / 1000}s`);
