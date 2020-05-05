const webpack = require('webpack');
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');
// const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin'); //速度分析
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // 体积分析
const baseConfig = require('./webpack.base');

// const smp = new SpeedMeasureWebpackPlugin();

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
        new webpack.DefinePlugin({
            // 定义全局常量
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        // new BundleAnalyzerPlugin(),
    ],
    // optimization: {
    //   splitChunks: {
    //     minSize: 0,
    //     cacheGroups: {
    //       commons: {
    //         name: 'commons',
    //         chunks: 'all',
    //         minChunks: 2,
    //       },
    //     },
    //   },
    // },
};

module.exports = merge(baseConfig, prodConfig);
