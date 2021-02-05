const express = require('express'); // express모듈을 담는 express객체 생성, require = noderequire
const app = express(); // express를 담는 app객체를 생성
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://node-react:qwer1234@node-react.jfkk0.mongodb.net/react-blog?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('DBconnected'))
  .catch((err) => console.error(err));
// mongoose 와 연결하기 위한 작업. 주소를 param으로 넣는다.
// useNewUrlParser는 mongoose에서 오는 deprecation 경고를 없애기 위해서

app.get('/', (req, res) => res.send('Hello world'));
// 공식문서에서 나오는 express 사용법.
// 라우터 / 페이지로 이동하면 response.send로 hello world 문자를 출력해줌.

app.listen(5000);
