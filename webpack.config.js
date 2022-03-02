
const path = require('path');
// const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './frontend/index.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    // plugins: [new MonacoWebpackPlugin()],
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};