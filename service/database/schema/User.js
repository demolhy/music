const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

// 创建UserShema
const userSchema = new Schema({
    UserId: {
        type: ObjectId
    },
    username: {
        unique: false,
        type: String
    },
    password: String,
    createAt: {
        type: Date,
        default: Date.now()
    },
    lastLoginAt: {
        type: Date,
        default: Date.now()
    }
})

// 发布model
mongoose.model('User', userSchema)