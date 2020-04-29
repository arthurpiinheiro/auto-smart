const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: true,
    entry: "./src/ts/app.ts",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]},
            {test: /\.tsx?$/, loader: "babel-loader"},
            {test: /\.tsx?$/, loader: "ts-loader"},
            {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: "./src/index.html"
        }),
    ]
};