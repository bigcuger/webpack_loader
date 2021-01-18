let path = require('path') //导入node.js的模块
module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        // 输出文件名称
        filename: "bundle.js",
        // 输出的路径
        path: path.join(__dirname, './build')
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=50000' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}