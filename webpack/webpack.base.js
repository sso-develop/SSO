const path = require('path');

const VERSION = require('../package.json').version;

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, `../dist/${VERSION}`), // 输出的路径
        filename: 'bundle.js'  // 打包后文件
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
		        test: /\.css$/,
		        use: [{
		            loader: 'style-loader'
		        }, {
		            loader: 'css-loader'
		        }],
		     },
        ]
    }
}