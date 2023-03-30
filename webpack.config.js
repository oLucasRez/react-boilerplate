const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@infra': path.resolve(__dirname, 'src/infra'),
      '@presentation': path.resolve(__dirname, 'src/presentation'),
      '@validation': path.resolve(__dirname, 'src/validation'),
      '@main': path.resolve(__dirname, 'src/main'),
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
};
