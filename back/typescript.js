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
  },
};
