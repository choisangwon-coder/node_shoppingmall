
// express를 불러오고 상수화 
const express = require('express');
// express를 app으로 상수화
const app = express();



//포트번호 상수화
const port = 5000;

//앱안에 있는 listen 함수를 통해서 서버를 실행 후 로그 남김
app.listen(port, console.log("server started"));
