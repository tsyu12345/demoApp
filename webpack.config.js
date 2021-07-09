const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MODE = "development";
const enableedSourceMap = MODE === "development";


module.exports = {
    mode:'development',
    entry: {
        index:path.join(__dirname, 'src', 'main.ts') //コンパイル入力のtsファイルへのパス
    },
    output: {
        path: path.join(__dirname, "dist"),//コンパイル後の出力パス
        assetModuleFilename: 'images/[name][ext]',
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg|gif)$/,
                type:'asset/resource'
            },

            
            {
                test: /\.ts$/,
                use: 'ts-loader',
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
    plugins: [
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