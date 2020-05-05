
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除之前打包的文件

const { library } = require('./dll.config.js');

// dll文件存放的目录
const dllPath = 'public/vendor';
module.exports = {
    // 入口文件
    entry: {
        ...library,
    },
    // 输出文件
    output: {
        path: path.join(__dirname, dllPath),
        filename: 'MyDll.[name].js',
        library: '[name]_[hash]',
    },
    mode: 'production',
    plugins: [
        // 清除之前的dll文件
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            path: path.join(__dirname, dllPath, '[name]-manifest.json'),
            name: '[name]_[hash]',
        }),
    ],
};
