module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'subject-empty': [2, 'always'],
		'body-empty': [2, 'never'],
		'footer-empty': [2, 'always'],
	},
};
