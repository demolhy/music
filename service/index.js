const Koa = require('koa');
const app = new Koa()
const {
    connect,
    initSchemas
} = require('./database/init.js')
const mongoose = require('mongoose')


;(async () => {
    console.log(1231);
    connect()
    
    
    console.log('dadasds');
    initSchemas()
    const User = mongoose.model('User')
    let oneUser = new User({
        username: 'jspang33',
        password: 'aabbcc'
    })
    oneUser.save().then(()=>{
        console.log('save success');
    })
})()

app.use(async (ctx) => {
    ctx.body = '<h1>hello koa2</h1>'
})

app.listen(3000, () => {
    console.log('服务器启动3000端口');
})