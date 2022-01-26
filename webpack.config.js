const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './src/static'),
    },
    compress: true,
    historyApiFallback: {
      rewrites: [
        {
          from: /\/(\d\.)?app\.js(\.map)?/,
          to: (context) => context.match[0],
        },
      ],
    },
    port: 9000,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@ui/form': path.resolve(__dirname, 'src/ui-kit/form'),
      '@ui/elements': path.resolve(__dirname, 'src/ui-kit/elements'),
      '@ui/utils': path.resolve(__dirname, 'src/ui-kit/utils'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/static/index.html',
    }),
  ],
  module: {
    rules: [
      { test: /\.(tsx|ts)$/i, use: 'ts-loader' },
      {
        test: /\.(svg|jpg|png)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
