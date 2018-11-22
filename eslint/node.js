/* eslint-env node */

module.exports = {
  'env': {
    'node': true,
  },
  'rules': {
    'no-process-env': 'off',
    'no-sync': [
      'error', {
        allowAtRootLevel: true,
      },
    ],
  },
};
