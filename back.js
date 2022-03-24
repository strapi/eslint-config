module.exports = {
  extends: ['./base.js', 'plugin:node/recommended'],
  rules: {
    'node/no-unpublished-require': 'off',
    'node/exports-style': ['error', 'module.exports'],
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/no-callback-literal': 'error',
    'node/handle-callback-err': 'error',
  },
};
