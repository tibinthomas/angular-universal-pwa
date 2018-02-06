const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');

module.exports = function () {
    return {
        entry: './src/main.ts',
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        },
        resolve: {
            extensions: ['.ts', '.js']
        },

        module: {
            rules: [
                {test: /\.ts$/, loader: 'awesome-typescript-loader'}
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html',
                output: __dirname + '/dist',
                inject: 'head'
            }),
            new CopyWebpackPlugin([
                { from: 'src/assets', to: 'assets'}
            ]),
            new ScriptExtPlugin({
                defaultAttribute: 'defer'
            })
        ]
    };
}
