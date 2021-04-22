module.exports = {
    devServer: {
        proxy: {
            '/dev': { 
                target: 'http://localhost:3000', // 后台接口域名
                ws: true, //如果要代理 websockets，配置这个参数
                secure: true, // 如果是https接口，需要配置这个参数
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/dev': ''
                }
            }
        },
        hot: true, //自动保存
        open: true, //自动启动
        port: 8080, //默认端口号
        host: "0.0.0.0"
    }
}
