const replace = require('@rollup/plugin-replace');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');

module.exports = {
  input: 'src/service-worker.ts',

  output: {
    dir: 'public/',
    format: 'iife',
    globals: {
      'workbox-cacheable-response': 'workboxCacheableResponse',
      'workbox-expiration': 'workboxExpiration',
      'workbox-routing': 'workboxRouting',
      'workbox-strategies': 'workboxStrategies',
    },
  },

  plugins: [
    replace({
      preventAssignment: true,
      values: {
        'process.env.NODE_ENV': JSON.stringify('production'),
      },
    }),
    nodeResolve({ browser: true }),
    terser(),
  ],
};
