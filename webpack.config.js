const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const extractPlugin = new ExtractTextPlugin({
    filename: './app.css'
});

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./index.jsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "./[name].bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist/media"),
        stats: 'errors-only',
        open: true,
        port: 13000,
        historyApiFallback: true,
        compress: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: [
                    "eslint-loader"
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ],
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.scss$/,
                include: [path.resolve(__dirname, 'src', 'scss')],
                use: extractPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })

            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: './media/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        extractPlugin
    ]
};
