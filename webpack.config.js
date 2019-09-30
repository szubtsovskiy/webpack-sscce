const path = require('path');

const DEV_PORT = 3334;

module.exports = () => ({
  entry: {
    'one': './js/one/app.js',
    'two': './js/two/app.js',
    'three': './js/three/app.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './static'),
    publicPath: `http://localhost:${DEV_PORT}/`
  },
  devServer: {
    port: DEV_PORT,
    hot: true,
    liveReload: false,
    contentBase: path.resolve(__dirname, './static'),
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|elm)/,
        loader: 'babel-loader',

        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 versions", "safari >= 7"]
                }
              }]
          ]
        }
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          {loader: 'elm-hot-webpack-loader'},
          {
            loader: 'elm-webpack-loader',
            options: {
              cwd: __dirname,
              forceWatch: true,
              debug: true
            }
          }
        ]
      }
    ]
  }
});
