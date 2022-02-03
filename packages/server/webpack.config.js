const path = require("path");
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.[hash].js'
    },
    module: {
        rules: [
          { test: /\.ts/i, use: 'ts-loader' },
        ],
      },
      plugins: [
        new NodemonPlugin()
      ],
}