/* eslint-disable import/no-unresolved, no-console */
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyfiles = require('copyfiles');
// eslint-disable-next-line import/no-extraneous-dependencies
var glob = require('glob');
const path = require('path');
const multipleHtmlPlugins = require('./htmlWebpackPlugins');
// const components = require('./components.json');

// Plugin to copy  dist files to EDS location
class CopyFiles {
  // eslint-disable-next-line class-methods-use-this
  apply(compiler) {
    // Copy files only in production mode when running `npm run build`
    // if (compiler.options.mode !== 'production') {
    //   return null;
    // }
    compiler.hooks.done.tap('Copy', () => {
      // console.log('compilation ===>');
      // copy component files
      copyfiles(
        ['./dist/**/*', './blocks'],
        {
          all: true,
          up: 1,
          exclude: [
            './dist/vendor/**/*',
            './dist/**/*.html',
            './dist/styles/**/*',
            './dist/**/*.hot-update.js',
            './dist/**/*.hot-update.mjs',
            './dist/**/*.hot-update.json',
          ],
          verbose: true,
        },
        err => err && console.error(err)
      );
      // copy vendor file
      copyfiles(
        ['./dist/vendor/vendor.js', './scripts'],
        {
          up: 2,
        },
        err => err && console.error(err)
      );
      copyfiles(
        ['./dist/styles/styles.css', './styles'],
        {
          up: 2,
        },
        err => err && console.error(err)
      );
    });
  }
}

// Here goes all configuration
module.exports = {
  mode: 'development',
  entry: glob.sync('./react-app/app/*/*.{jsx,tsx}').reduce(function (obj, el) {
    // extract `component name` from directory path
    const compName = path.parse(el).dir.split('/').pop();
    // eslint-disable-next-line no-param-reassign
    obj[compName] = el;
    return obj;
  }, {}),
  devtool: false,
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/[name].js',
    // libraryTarget: 'window',
    // libraryExport: 'default',
    library: {
      type: 'module',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/, // apply to all JS/JSX files
        exclude: /node_modules/, // exclude all files on node_modules
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/[name].css',
    }),
    ...multipleHtmlPlugins,
    new CopyFiles(),
    ...[
      process.env?.WEBPACK_SERVE !== 'true' &&
        new webpack.BannerPlugin({
          banner: opt => {
            // append messages to JS and CSS file
            if (opt.filename.endsWith('.css')) {
              return '/* stylelint-disable */';
            }
            if (opt.filename.endsWith('.js')) {
              return '/* eslint-disable */';
            }
          },
          raw: true,
          stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
        }),
    ],
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.cjs'],
  },
  optimization: {
    // runtimeChunk: {
    //   name: 'vendor',
    // },
    // removeEmptyChunks: true,
    // check dev or production mode
    minimize: process.env?.WEBPACK_SERVE !== 'true',
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: true,
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              calc: true,
              // convertValues: true,
              discardComments: {
                removeAll: true,
              },
              discardDuplicates: true,
              discardEmpty: true,
              mergeRules: true,
              normalizeCharset: true,
              // reduceInitial: true, // This is since IE11 does not support the value Initial
              svgo: true,
            },
          ],
        },
      }),
    ],
    chunkIds: 'named',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  devServer: {
    host: 'localhost', // where to run
    historyApiFallback: true,
    port: 4200, // given port to exec. app
    // open: true, // open new tab
    // hot: true, // Enable webpack's Hot Module Replacement
    watchFiles: ['/react-app/**/*'],
    devMiddleware: {
      // publicPath: '/dist/',
      writeToDisk: true,
    },
  },
  watchOptions: {
    aggregateTimeout: 600,
  },
};
