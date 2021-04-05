const { override } = require('customize-cra');
module.exports = override(useLoader);

function useLoader(config) {
  if (process.env.NODE_ENV === 'production') config.output.publicPath = '/job.github.io/build/';
  config.module.rules[1].use.push({
    loader: '@byted/class-to-css-loader',
    options: {
      type: 'react',
      rules: [
        { key: 'c', valReg: /p/, css: 'cursor: pointer' }
      ]
    }
  });
  return config;
}