module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'subject-empty': [2, 'never'],
		// 'body-empty': [2, 'always'], // disable prompt
		'footer-empty': [2, 'always'],
	},
};
