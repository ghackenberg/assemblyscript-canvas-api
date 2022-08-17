const { resolve } = require('path')
const { NormalModuleReplacementPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/scripts/main.tsx',
    devServer: {
        static: resolve(__dirname, 'build'),
        port: 8080,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        fallback: {
            fs: false
        }
    },
    output: {
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    plugins: [
        new NormalModuleReplacementPlugin(/node:/, resource => {
            resource.request = resource.request.replace(/^node:/, '')
        }),
        new HtmlWebpackPlugin({
            title: 'WebAssembly with AssemblyScript, TypeScript and React'
        })
    ],
    experiments: {
        topLevelAwait: true
    }
}