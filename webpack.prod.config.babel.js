const webpack = require('webpack');
const path = require('path');
const HappyPack = require('happypack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const configuration = {
    entry: {
        main: [
            'babel-polyfill',
            './src/index.js',
        ]
    },
    
    module: {
        loaders: [
            { exclude: /node_modules/, loader: 'strip-loader?strip[]=console.log!babel-loader!eslint-loader?failOnWarning=false&failOnError=false', test: /\.js$/ },
            { loader: ExtractTextWebpackPlugin.extract('style','css'), test: /\.css$|\.less$/ },
            { loader: 'json', test: /\.json/ },
            { loader: 'file-loader?name=[name]-[md5:hash].[ext]', test: /\.gif$|\.jpg$|\.jpeg$|\.png|\.eot$|\.svg$|\.ttf$|\.woff$|\.woff2$|\.pdf$/ }
        ]
    },
    output: {
        chunkFilename: '[name]-[chunkhash].js',
        filename: '[name]-[chunkhash].js',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/^react?$/, require.resolve('react')),
        new ExtractTextWebpackPlugin('[name]-[chunkhash].css'),

        new webpack.DefinePlugin({
            "process.env": { 
               NODE_ENV: JSON.stringify("production") 
             }
        }),
        

        new webpack.optimize.AggressiveMergingPlugin(),

        new webpack.optimize.OccurrenceOrderPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
                max_line_len: 0
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: module => module.resource && (/node_modules/).test(module.resource),
        }),

        new HtmlWebpackPlugin({
            inject: 'body',
            minify: {},
            hash: true,
            template: './src/index.html'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
              progress: true
            }
         })
    ]
};

module.exports = configuration