//process.env.NODE_ENV: 환경변수
//local환경인 경우, process.env.NODE_ENV가 development,
//deploy한 후인 경우, process.env.NODE_ENV가 production
if(process.env.NODE_ENV == 'production') {
    module.exports = require('./prod'); //prod.js에서 값 가져오기
}
else if(process.env.NODE_ENV == 'development') {
    module.exports = require('./dev'); //dev.js에서 값 가져오기
}