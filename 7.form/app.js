const express = require('express');
const app = express();
const port = 8011;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render('index');
});
app.get("/getform",function(req,res){
res.sed('데이터 받았읍니다')
console.log(req.send)
)}
app.listen(port, function() {
    console.log(`Server is running at http://localhost:${port}`);
});
