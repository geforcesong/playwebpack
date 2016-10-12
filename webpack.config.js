var resolve = require('path').resolve;
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: [
            resolve(__dirname, 'www', 'views', 'common', 'public', 'index.js')
        ]
    },
    output: {
        path: resolve(__dirname, 'public', 'assets'),
        publicPath: "/assets/",
        filename: '[name].[hash].bundle.js'
    },
    debug: true,
    plugins: [
        new HtmlWebpackPlugin({
            filename: resolve(__dirname, 'public', 'assets', 'header.ejs'),
            inject: false,
            template: resolve(__dirname, 'www', 'views', 'common', 'header.ejs.template')
        }),
        new HtmlWebpackPlugin({
            filename: resolve(__dirname, 'public', 'assets', 'footer.ejs'),
            inject: 'body',
            template: resolve(__dirname, 'www', 'views', 'common', 'footer.ejs.template'),
            hash: false
        })
    ]
};
