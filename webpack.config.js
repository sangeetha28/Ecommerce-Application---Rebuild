const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["latest", "react", "stage-0"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            /* Webpack to see the home image as a dependency */
            /*any image up-to 8kb would be converted to base64 string and inlined in the code
             Any image with a size higher than 8kb would be passed on the file-loader to process, along with its options.*/
            loader: "file-loader",
            options: {
              //limit: 8000,
              // Convert images < 8kb to base64 strings
              //hash the file name(useful for cache-brusting)
              // look at the emit directory
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[hash]-[name].[ext]"
        }
      }
    ]
  },

  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "dist/",
    filename: "bundle.js"
  },

  devServer: {
    contentBase: path.join(__dirname, "./public"),
    port: 3000,
    publicPath: "http://localhost:3000/dist",
    hotOnly: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // will generate index html in the dist folder
    // new HtmlWebpackPlugin({
    //   filename: "index.html",
    //   template: "./public/index.html"
    // })
  ]
};
