module.exports = {
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/es6',
        './rules/imports',
        './rules/node',
        './rules/strict',
        './rules/style',
        './rules/variables',
    ].map((path: string) => require.resolve(path)),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {},
};