const express = require('express');
const app = express();
const port = 8011;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render('index');
});
app.get("/getform", function(req, res) {
    res.send('데이터 받았습니다');
    console.log(req.query); // 또는 req.params 또는 필요한 요청 데이터
});

app.listen(port, function() {
    console.log(`Server is running at http://localhost:${port}`);
});
