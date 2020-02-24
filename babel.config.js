// There is a bug on babel-loader, it cannot be used with webpack and jest with configuration on webpack.config.js

module.exports = {
	presets: [
		"@babel/typescript",
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current'
				}
			}
		]
	],
	"ignore": [
		"src/**/*.spec.ts"
	]
};
