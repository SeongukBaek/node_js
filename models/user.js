const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //john ahn@naver.com과 같은 입력에서 공백을 없애줌
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //유저가 관리자가 될 수도 있고 일반 유저일 수도 있기 때문
        type: Number,
        default: 0
    },
    image: String,
    token: { //유효성 관리를 위함
        type: String
    },
    tokenExp: { //token의 유효기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema) // 스키마를 모델로 감싸기 위함

module.exports = {User} // 해당 모델을 다른 파일에서도 사용하기 위해 export