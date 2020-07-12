
// express를 불러오고 상수화 
const express = require('express');
// express를 app으로 상수화
const app = express();
const moran = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');

// // 리퀘스트 리스폰스 테스트
// app.use((req, res) => {
//     res.json({
//         message : "data get"
//     });
// });
// //json은 데이터 구조! { 키 : 벨류 } 로 이루어진 데이터
// // 제이슨은 현재 가장많이 사용하고 있는 데이터 구조
// //인터넷에서 검색해 볼 것 (제이슨)
//주석처리 단축키 : 커맨드+슬레시


//데이터베이스 연결
const dbAdress = "mongodb+srv://admin:1350110@cluster0.hit8h.mongodb.net/node_shoppingmall?retryWrites=true&w=majority";

const DB_Options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose
    .connect(dbAdress, DB_Options)
    .then(() => console.log("MongoDB connected ..."))
    .catch(err => console.log(err.message));





//미드웨어 설정
app.use(moran('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 라우팅
app.use('/product', productRoute);
app.use('/order', orderRoute);


//포트번호 상수화
const port = 5000;

//앱안에 있는 listen 함수를 통해서 서버를 실행 후 로그 남김
app.listen(port, console.log("server started"));
