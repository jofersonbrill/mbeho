const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name } = require('file-loader');

const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? '/mbeho/' : '/';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: PUBLIC_PATH
    },
    
    mode: 'development',

     devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        port: 3000,
    },

    module: {
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.*scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/ressources',
                        }
                    }
                ],
            }
        ]
        
    },


    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ],

    resolve:{
        extensions: ['.js', '.jsx'],
    },
   
}