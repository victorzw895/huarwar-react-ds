module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'subject-case': [2, 'never'],
		'body-empty': [2, 'always'],
		'footer-empty': [2, 'always'],
	},
};
