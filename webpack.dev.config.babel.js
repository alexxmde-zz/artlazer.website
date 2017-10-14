const webpack = require('webpack');
const path = require('path');
const HappyPack = require('happypack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const configuration = {
    devtool: 'eval-source-map',
    entry: {
        main: [
            'babel-polyfill',
            './src/index.js',
        ]
    },
    
    module: {
        loaders: [
            { exclude: /node_modules/, loader: 'happypack/loader?id=babel', test: /\.js$/ },
            { loader: 'style!css', test: /\.css$|\.less$/ },
            { loader: 'json', test: /\.json/ },
            { loader: 'file-loader?name=[name]-[md5:hash].[ext]', test: /\.gif$|\.jpg$|\.jpeg$|\.png|\.eot$|\.svg$|\.ttf$|\.woff$|\.woff2$|\.pdf$/ },                
        ]
    },
    output: {
        chunkFilename: '[name]-[hash].js',
        filename: '[name]-[hash].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },

    devServer: {
        contentBase: './dist',
        port: 3003,
        hot: true,
        //The rest is terminal configurations
        quiet: false,
        noInfo: false,
        stats: {
            assets: false,
            chunks: false,
            children: false,
            hash: false,
            versions: false,
            colors: false
        }
    },

    plugins: [
        new HappyPack({
            id: 'babel',
            threads: 4,
            loaders: [ {
                path: 'babel-loader',
                query: {
                    presets: [ 'react', 'es2015', 'stage-0' ],
                    plugins: [ 'transform-decorators-legacy', 'transform-runtime' ]
                },
                cache: false,
                verbose: true
            }, 'eslint-loader'
             ]
        }),

        new CopyWebpackPlugin([
            { from: './dev/version.json', to: 'version.json' },
            { from: './dev/config/config.json', to: 'config/config.json' }
        ]),

        new webpack.NormalModuleReplacementPlugin(/^react?$/, require.resolve('react')),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),

       // new webpack.optimize.DedupePlugin(),

        new webpack.optimize.AggressiveMergingPlugin(),

        new webpack.optimize.OccurrenceOrderPlugin(),

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
        })
    ]
};

module.exports = configuration