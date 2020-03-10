const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
}
