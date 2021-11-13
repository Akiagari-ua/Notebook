const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash].js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './src/static'),
    },
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/static/index.html',
    }),
  ],
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
      {
        test: /\.(svg|jpg|png)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
        type: 'javascript/auto',
      },
    ],
  },
};
