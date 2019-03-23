const path = require('path');

const PluginClean = require('clean-webpack-plugin');
const PluginFriendlyErrors = require('friendly-errors-webpack-plugin');

module.exports = {
  mode: 'production',

  target: 'node',

  entry: './src/entry.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.[hash].js',
  },

  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
      },
    ],
  },

  plugins: [new PluginClean(), new PluginFriendlyErrors()],

  stats: 'errors-only',
};
