module.exports = {
  extends: ['./javascript.js', 'airbnb-typescript/base', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    // @see: https://github.com/typescript-eslint/typescript-eslint/issues/1824
    '@typescript-eslint/indent': 'off',
    /**
     * Ensures the use of import and export as type when possible.
     * @see: https://typescript-eslint.io/blog/consistent-type-imports-and-exports-why-and-how/
     */
    '@typescript-eslint/consistent-type-exports': 'warning',
    '@typescript-eslint/consistent-type-imports': 'warning',
    '@typescript-eslint/no-import-type-side-effects': 'warning',
  },
};
