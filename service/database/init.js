const mongoose = require('mongoose')
const db = 'mongodb://localhost/music_user'
const glob = require('glob')
const {
    resolve
} = require('path')

exports.initSchemas = () => {
    glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require)
}

exports.connect = () => {
    let maxConnectNum = 0

    // 连接数据库
    mongoose.set('useCreateIndex',true)
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return new Promise((resolve, reject) => {
        // 连接监听事件
        mongoose.connection.on('disconnected', () => {
            console.log('--------数据库断开');

            if (maxConnectNum <= 3) {
                maxConnectNum++
                mongoose.connect(db, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
            } else {
                reject()
                throw new Error('数据库出现问题....')
            }
        })
        mongoose.connection.on('error', (err) => {
            console.log('--------数据库错误');
            if (maxConnectNum <= 3) {
                maxConnectNum++
                mongoose.connect(db, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                })
            } else {
                reject(err)
                throw new Error('数据库出现问题....')
            }
        })
        mongoose.connection.once('open', () => {
            console.log('数据库已经连接');
        })
    })

}