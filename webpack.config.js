// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    entry: './src/index.js',
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "eval-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                { from: 'php', to: 'api' }
            ]
        })

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                resolve: {
                    extensions: [".js", ".jsx"]
                },
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|webp)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext]'
                }
            },
            {
                test: /\.(svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/icons/[name][ext]'
                }
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


    } else {
        config.mode = 'development';
    }
    return config;
};
