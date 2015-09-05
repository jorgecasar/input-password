module.exports = {
	suites: ['test'],
	verbose: true,
	testTimeout: 5 * 60 * 1000,
	plugins: {
		sauce: {
			disabled: true,
			browsers: ['chrome', 'firefox']
		}
	}
};
