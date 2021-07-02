const path = require('path');
module.exports = {
    mode:'development',
    entry: {
        index:path.join(__dirname, 'src', 'main.ts') //コンパイル入力のtsファイルへのパス
    },
    output: {
        path: path.join(__dirname, "dist"),//コンパイル後の出力パス
        filename:'index.js'
    },
    module: {
        rules: [{
            test:/\.ts$/,
            use:'ts-loader'
        }]
    },
    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [
            '.ts',
            '.js'
        ]
    }
}