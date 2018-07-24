const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./app/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['env'] }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, "build/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "app/"),
        port: 3000,
        publicPath: "http://localhost:3000/build/",
        hotOnly: true
    },
    plugins: [ new webpack.HotModuleReplacementPlugin() ]
};