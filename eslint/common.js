/* eslint-env node */
const INDENTS = 2;
const STATEMENTS_PER_LINE = 2;

module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 2017,
    'sourceType': 'module',
  },
  'plugins': ['babel'],
  'extends': ['eslint:all'],
  'env': {
    'es6': true,
  },
  'rules': {
    'require-unicode-regexp': 'off',
    'no-console': 'warn',
    'linebreak-style': 'off',
    'no-extra-boolean-cast': 'off',
    'no-prototype-builtins': 'off',
    'no-extra-parens': ['error', 'functions'],
    'valid-jsdoc': 'off',
    'class-methods-use-this': 'off',
    'dot-location': ['error', 'property'],
    'no-magic-numbers': ['error', { 'ignore': [-1, 0, 1, 2, 3, 10, 100, 1000], 'ignoreArrayIndexes': true }],
    'no-warning-comments': 'off',
    'no-alert': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'no-invalid-this': 'off',
    'init-declarations': 'off',
    'indent': ['error', INDENTS, { 'MemberExpression': 'off' }],
    'quotes': ['error', 'single'],
    'object-curly-spacing': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'quote-props': 'off',
    'sort-keys': 'off',
    'padded-blocks': ['error', 'never'],
    'sort-imports': 'off',
    'template-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'object-curly-newline': 'off',
    'require-jsdoc': 'off',
    'no-underscore-dangle': 'off',
    'one-var': 'off',
    'arrow-body-style': 'off',
    'newline-after-var': 'off',
    'max-len': 'off',
    'object-shorthand': 'off',
    'max-lines': 'off',
    'max-params': 'off',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'id-length': 'off',
    'max-statements-per-line': ['error', { 'max': STATEMENTS_PER_LINE }],
    'multiline-ternary': 'off',
    'multiline-comment-style': 'off',
    'no-mixed-operators': 'off',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'line-comment-position': 'off',
    'no-inline-comments': 'off',
    'operator-linebreak': [
      'error', 'after', {
        'overrides': {
          '?': 'ignore',
          ':': 'ignore',
        },
      },
    ],
    'lines-around-comment': [
      'error',
      {
        'beforeBlockComment': true,
        'allowBlockStart': true,
        'allowBlockEnd': true,
      },
    ],
    'array-element-newline': 'off',
    'capitalized-comments': 'off',
    'no-lonely-if': 'off',

    'max-lines-per-function': 'off',
    'max-statements': 'off',
    'object-property-newline': 'off',
    'space-unary-ops': 'off',
    'func-style': 'off',
    'no-ternary': 'off',
    'prefer-reflect': 'off',
    'prefer-template': 'off',
    'prefer-object-spread': 'off',
    'sort-vars': 'off',
  },
};
