const { defineConfig } = require('@vue/cli-service')
 module.exports = defineConfig({
        configureWebpack: {
            entry: "./src/main.js",
            devServer: {
                hot: true,
                proxy: "http://web:8000/"
            },
            watchOptions: {
                ignored: /node_modules/,
                poll: 1000,
            },
        },
        transpileDependencies: true,
    });