'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({ 
  name: 'hoist-require',
});