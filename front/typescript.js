module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'import', 'check-file'],
  overrides: [
    {
      /**
       * We're allowing one index file that should be
       * at the root of the src folder.
       */
      files: ['**/src/index.[jt]s?(x)'],
      rules: {
        'check-file/no-index': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:jest-dom/recommended', 'plugin:testing-library/react'],
      plugins: ['jest-dom', '@typescript-eslint'],
      rules: {
        'testing-library/prefer-screen-queries': 'off',
        'testing-library/render-result-naming-convention': 'off',
        // "testing-library/await-async-query": "off",
        // "testing-library/await-async-utils": "off",
        // "testing-library/no-await-sync-query": "off",
        // "testing-library/no-container": "off",
        // "testing-library/no-debugging-utils": "off",
        // "testing-library/no-dom-import": ["off", "react"],
        // "testing-library/no-node-access": "off",
        // "testing-library/no-promise-in-fire-event": "off",
        // "testing-library/no-render-in-setup": "off",
        // "testing-library/no-unnecessary-act": "off",
        // "testing-library/no-wait-for-empty-callback": "off",
        // "testing-library/no-wait-for-multiple-assertions": "off",
        // "testing-library/no-wait-for-side-effects": "off",
        // "testing-library/no-wait-for-snapshot": "off",
        // "testing-library/prefer-find-by": "off",
        // "testing-library/prefer-presence-queries": "off",
        // "testing-library/prefer-query-by-disappearance": "off",
        // "jest-dom/prefer-checked": "off",
        // "jest-dom/prefer-empty": "off",
        // "jest-dom/prefer-enabled-disabled": "off",
        // "jest-dom/prefer-focus": "off",
        // "jest-dom/prefer-in-document": "off",
        // "jest-dom/prefer-required": "off",
        // "jest-dom/prefer-to-have-attribute": "off",
        // "jest-dom/prefer-to-have-class": "off",
        // "jest-dom/prefer-to-have-style": "off",
        // "jest-dom/prefer-to-have-text-content": "off",
        // "jest-dom/prefer-to-have-value": "off"
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    /**
     * You can warn or error, but a normal log is not allowed in the FE codebase,
     * this helps us catch "stragglers" whilst debugging issues.
     */
    'no-console': ['error', { allow: ['warn', 'error'] }],
    /**
     * This is useful for refs especially when you know the
     * element will exist on mount within the component.
     */
    '@typescript-eslint/no-non-null-assertion': 'off',
    /**
     * Useful for when you only need to access certain args of a function.
     * e.g. `new Array(10).map((_, i) => i)` – it won't complain about `_`.
     */
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    /**
     * Currently, we allow:
     *
     * ```jsx
     * const Component = (props) => {
     *  return <div />;
     * };
     * ```
     */
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    /**
     * This produces an import list like:
     *
     * ```js
     * import React from 'react';
     *
     * import PropTypes from 'prop-types';
     *
     * import LocalesProviderContext from './context';
     * ```
     *
     * where `react` is always first followed by library imports
     * and then local code imports are managed independently.
     */
    'import/order': [
      'error',
      {
        groups: [
          ['external', 'internal', 'builtin'],
          'parent',
          ['sibling', 'index'],
          'object',
          'type',
        ],
        pathGroups: [{ pattern: 'react', group: 'external', position: 'before' }],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    /**
     * We only want named exports:
     *
     * ```jsx
     * const Apple = () => <div />;
     *
     * export { Apple }
     * ```
     */
    'import/no-default-export': 'error',
    /**
     * Enforce file location for particular types of files.
     */
    'check-file/folder-match-with-fex': [
      'error',
      {
        '*.test.{js,jsx,ts,tsx}': '**/tests/',
      },
    ],
    /**
     * No index files – flatter structure.
     * Edge cases can disable the eslint rule.
     */
    'check-file/no-index': 'error',
    /**
     * Enforce naming convention for files,
     * all JSX component files must be PascalCase.
     * All other files must be camelCase.
     *
     * no dashes, no underscores and definitely no spaces.
     */
    'check-file/filename-naming-convention': [
      'error',
      { '**/*.{js,ts}': 'CAMEL_CASE', '**/*.{jsx,tsx}': 'PASCAL_CASE' },
      { ignoreMiddleExtensions: true },
    ],
    /**
     * These are turned off because, typescript.
     */
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'no-duplicate-imports': 'off',
    'no-unused-vars': 'off',
  },
};
