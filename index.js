const express = require('express') //express 모듈 가져오기
const app = express() //새로운 express 앱 생성
const port = 3000 //back 서버 포트번호
const bodyParser = require('body-parser') //body parser 가져오기

const config = require('./config/key'); //config폴더의 key.js에서 값 가져오기

const {User} = require("./models/user") //데이터 베이스에 저장하기 위해 user model 가져오기

//application/x-www-form-urlencoded 형식의 데이터 분석해서 가져오게 하는 옵션
app.use(bodyParser.urlencoded({extended: true})); 

//application/json 형식의 데이터 분석해서 가져오게 하는 옵션
app.use(bodyParser.json());


const mongoose = require('mongoose') // mongoose 모듈 가져오기
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false //에러 방지를 위한 설정
}).then(() => console.log('MongoDB Connected...')) // 제대로 실행된 경우 출력
.catch(err => console.log(err)) //에러 발생 시 출력

app.get('/', (req, res) => { //'/': root dir에 오면 hello world 출력
  res.send('Hello World! 반갑습니다 ! merry chrismas')
})


app.post('/register', (req, res) => {
    // 회원가입할때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다. 이때 user model이 필요

    // { 이와 같은 형식으로 req.body에 데이터가 저장되어 있음 -> body-parser가 있기 때문에 가능
    //     id: "hello",
    //     password: "123"
    // }

    const user = new User(req.body) //정보들을 데이터베이스에 넣기 위해 req.body

    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err}) // 저장 시 에러 발생하면 client에게 json형식으로 에러 전달
        return res.status(200).json({ // 저장 성공 시 status(200): 성공했다는 의미 전달
            success: true
        })
    }) //mongodb의 메소드, req.body의 정보들이 user model에 저장됨
}) //회원가입을 위한 route 생성 완료


app.listen(port, () => { // app 실행
  console.log(`Example app listening at http://localhost:${port}`)
}) 