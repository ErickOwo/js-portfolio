const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssWebpackPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const DotEnv = require("dotenv-webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename:  "assets/images/[hash][ext][query]"
    },
    resolve: {
        extensions: ["js"],
        alias: {
            "@utils": path.resolve(__dirname,"src/utils/"),
            "@templates": path.resolve(__dirname,"src/templates/"),
            "@styles": path.resolve(__dirname,"src/styles/"),
            "@images": path.resolve(__dirname,"src/assets/images/")
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
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
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }
}