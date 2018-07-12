const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const DIST = 'dist'

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, DIST),
        open: true,
        port: 8888
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new CleanWebpackPlugin([DIST]),
        new HtmlWebpackPlugin({
            title: "D3 examples",
            template: "./src/templates/index.html"
        })
    ],
    output: {
        filename: 'common.bundle.js',
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