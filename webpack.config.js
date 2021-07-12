const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MODE = "development";
const enableedSourceMap = MODE === "development";


module.exports = {
    mode:'development',
    entry: {
        index: path.join(__dirname, 'src'/*dir*/, 'main.ts')
    /*path.join()を使わなくてもいいけど、OSの’/,¥’依存を回避するため使用する*/
    },
    output: {
        path: path.join(__dirname, "dist"),//コンパイル後の出力パス
        filename:'index.js', //jsファイル出力のファイル名
        assetModuleFilename: 'images/[name][ext]',
    },
    devtool: 'source-map',//ソースマッピングのスタイル設定
    target: 'node',　//特定開発環境のターゲット※ここではNode.js
    module: { //module →プロジェクト内の.jsや.cssを指す。その処理様式を決める部分
        rules: [
            {
                test: /\.(png|jpeg|gif)$/,
                type:'asset/resource'
            },

            
            {
                test: /\.ts$/, //コンパイラが処理するファイルの拡張子（正規表現）
                use: 'ts-loader', //使用するコンパイラ：例えばここをtscにするとts-loaderではなくtscでコンパイルされる。
            },
            {
                test:/\.css/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {url:false, sourceMap:enableedSourceMap}
                    }
                ]
            }
        ]
    },
    plugins: [ //webpackの拡張：
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        modules: [
            "node_modules",
        ],
        extensions: [
            '.ts',
            '.js',
            '.css',
            '.png',
            '.jpeg'
        ]
    }
}