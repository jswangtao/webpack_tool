const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成html文件的插件
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin'); //速度分析
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // 体积分析
const baseConfig = require('./webpack.base');

const dllPath = '../public/vendor/';
const { library } = require('./dll.config.js');
// const smp = new SpeedMeasureWebpackPlugin();

function absolePath(module) {
    return path.resolve(__dirname, module);
}

const prodConfig = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [
                                autoprefixer({
                                    browsers: ['last 2 version', '>1%', 'ios 7'],
                                }),
                            ],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // 以指定的模版生成指定名字的html
            template: path.join(__dirname, '../index.html'),
            env: false,
        }),
        new webpack.DefinePlugin({
            // 定义全局常量
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new CopyWebpackPlugin([
            {
                from: absolePath('../public/vendor'),
                to: absolePath('../dist'),
            },
        ]),
        // new BundleAnalyzerPlugin(),
        ...Object.keys(library).map(
            (name) => new webpack.DllReferencePlugin({
                context: '.',
                manifest: path.join(__dirname, dllPath, `${name}-manifest.json`),
            }),
        ),
    ],
};

module.exports = merge(baseConfig, prodConfig);
