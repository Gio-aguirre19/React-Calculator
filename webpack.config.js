var debug = process.env.NODE_ENV !== "production";
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpack = require('html-webpack-plugin');
var HtmlWebpackConfig = new HtmlWebpack({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  minify: {
    collapseWhitespace: true,
  },
  inject: 'body'
})

module.exports = {
  entry: "./src/js/index.js",
  devtool: debug ? "inline-sourcemap" : null,
  output: {
    path: __dirname + "/dist/",
    filename: "index.min.js"
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
          publicPath: "/dist"
        })
      },{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', "react"],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  plugins: [
    HtmlWebpackConfig,
    new ExtractTextPlugin({
      filename: "styles.css",
      allChunks: true,
      disable: false
    })
  ]
}
