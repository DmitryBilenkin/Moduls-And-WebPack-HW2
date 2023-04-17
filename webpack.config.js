const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugun = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'main.js'
    },

    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugun.loader,
                    'css-loader'
                ]
            }

        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename:'index.html'
        }),

        new MiniCssExtractPlugun()
    ]

}