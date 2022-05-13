module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'require-atomic-updates': 'off',
    strict: ['error', 'global'],
    'no-return-await': 'error',
    'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
    'import/order': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/first': 'error',
    'import/extensions': ['error', 'never'],
    'import/newline-after-import': 'error',
    'one-var': ['error', 'never'],
    'no-plusplus': 'off',
  },
};
