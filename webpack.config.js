const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: 'source-map',
  optimization: isProd
    ? {
        usedExports: true,
        minimize: true,
        minimizer: [
          new TerserPlugin({
            parallel: true
          })
        ]
      }
    : undefined,
  entry: './src/index.ts',
  output: {
    filename: isProd ? 'index.umd.min.js' : 'index.umd.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'inputValidator'
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.json', '.ts', '.tsx', 'js']
  },
  module: {
    rules: [
      {
        test: /\.[jt]s?$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
  // DEV PLUGINS
    isProd && new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ].filter(Boolean)
}
