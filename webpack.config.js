'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/js/index.js",

    output: {
        filename: "bundle.js"
    },

    module: {
        rules: [{
            test: /\.pug$/,
            use: {
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        }, {
            test: /\.s[ca]ss$/,
            use: [
                {
                    loader: 'file-loader',
                    options: { name: 'bundle.css', },
                },
                // { loader: 'style-loader' },
                { loader: 'extract-loader' },
                { loader: 'css-loader' },
                { loader: 'sass-loader' },
            ]
        }, {
            test: /\.(png|jpg|svg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './public/img/'
                }
            }]
        }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/views") + '/index.pug'
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'catalog.html',
        //     template: path.resolve(__dirname, "src/views") + '/catalog.pug'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'product.html',
        //     template: path.resolve(__dirname, "src/views") + '/product.pug'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'news-feed.html',
        //     template: path.resolve(__dirname, "src/views") + '/news-feed.pug'
        // }),
    ]
};