const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssWebpackPlugin = require("mini-css-extract-plugin");
const DotEnv = require("dotenv-webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
    assetModuleFilename: "assets/images/[hash][ext][query]"
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@templates": path.resolve(__dirname, "src/templates/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@images": path.resolve(__dirname, "src/assets/images/")
    }
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }]
      },
      {
        test: /\.(css|styl)$/i,
        use: [MiniCssWebpackPlugin.loader, "css-loader", "stylus-loader"]
      },
      {
        test: /\.png$/,
        type: "asset/resource"
      },
      {
        test: /\.(woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCssWebpackPlugin({
      filename: "assets/[name].[contenthash].css"
    }),
    new DotEnv(),
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    compress: true,
    port: 3008,
    open: true,
    historyApiFallback: true
  }
};
