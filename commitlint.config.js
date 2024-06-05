export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'subject-case': [2, 'never'],
	},
	skipQuestions: ['body', 'footer'],
};
