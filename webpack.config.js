const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const DIST = 'dist'

module.exports = {
    entry: ['./src/index.js'],
    mode: 'development',
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, DIST),
        open: true,
        port: 8888
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CleanWebpackPlugin([DIST]),
        new HtmlWebpackPlugin({
            title: "D3 examples"
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, DIST)
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            }
        ]
    }
};