

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      { test: /\.(tsx|ts)$/i, use: 'ts-loader' },
    ],
  },
};
