import path from 'path';
import { Configuration } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
    entry: '@/index.tsx',
    module: {
        rules: [
            {
                test: /\.(ts|js|svg)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-react-loader',
                        options: {
                            limit: 10000,
                            jsx: true
                        }
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, './src'),
            'react-native$': 'react-native-web'
        }
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

export default config;
