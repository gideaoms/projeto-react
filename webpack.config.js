const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const INDEX_ENTRY = path.resolve(__dirname, 'src', 'js', 'index.js')
const PATH_OUTPUT = path.resolve(__dirname, 'dist')
const PORT = 8080
const CONTENT_BASE = path.resolve(__dirname, 'dist')
const SRC = path.resolve(__dirname, 'src')
const JS = path.resolve(SRC, 'js')
const NODE_MODULES = path.resolve(__dirname, 'node_modules')

module.exports = {
    entry: {
        app: ['babel-polyfill', INDEX_ENTRY],
        vendor: [
            'jquery', 
            'tether', 
            'bootstrap', 
            'react', 
            'react-dom',
            'axios',
            'react-redux',
            'react-redux-toastr',
            'react-router-dom',
            'redux',
            'redux-saga',
            'prop-types',
            'babel-polyfill',
            'modules/bootstrap/scss/bootstrap.scss',
            'modules/font-awesome/scss/font-awesome.scss'
        ]
    },
    output: {
        path: PATH_OUTPUT,
        filename: 'js/[name].[hash].js',
        publicPath: '/'
    },
    devServer: {
        port: PORT,
        contentBase: CONTENT_BASE,
        historyApiFallback: true
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ],
        alias: {
            modules: NODE_MODULES,
            src: SRC,
            js: JS
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Onvitri App',
            template: 'src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Tether: 'tether'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: [
                        'es2015',
                        'react',
                        'stage-0'
                    ],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader'
                        }, 
                        {
                            loader: 'sass-loader'
                        }
                    ],

                    /* Use style-loader in development */
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
                use: 'file-loader'
            }
        ]
    }
}