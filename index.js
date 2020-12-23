const express = require('express') //express 모듈 가져오기
const app = express() //새로운 express 앱 생성
const port = 3000 //back 서버 포트번호

const mongoose = require('mongoose') // mongoose 모듈 가져오기
mongoose.connect('mongodb+srv://bsu:fixied0313@mongocluster.blpt6.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false //에러 방지를 위한 설정
}).then(() => console.log('MongoDB Connected...')) // 제대로 실행된 경우 출력
.catch(err => console.log(err)) //에러 발생 시 출력

app.get('/', (req, res) => { //'/': root dir에 오면 hello world 출력
  res.send('Hello World! 반갑습니다 !')
})
app.listen(port, () => { // app 실행
  console.log(`Example app listening at http://localhost:${port}`)
}) 