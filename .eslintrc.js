module.exports = {
  'extends': [
    './eslint/common.js',
    './eslint/react.js',
    './eslint/node.js',
  ],
  'globals': {
    '__DEBUG__': true,
  },
  'env': {
    'jest': true,
  }
};