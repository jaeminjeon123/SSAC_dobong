const express = require('express');
const app = express();
const port = 8151;

app.set("view engine", "ejs");
app.set("views", "./views");

//body-parser 미들웨어등록
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.get("/", (req, res) => {
    res.render('index');
});
app.get("/getform", function(req, res) {
    //res.send('데이터 받았습니다');
    
    console.log(req.query); // 또는 req.params 또는 필요한 요청 데이터
    res.render("result",
    {title:'GET',
    userInfo:req.query ,//{id,email, password}
});
});
app.post("/getForm",function(req,res){
    //post요청은 request.body에 전달 
    console.log(req.body);

    //send와 render중 하나만 사용 가능
    // res.send(
    //     <ul>
    //         <li>
                
    //         </li>
    //     </ul>
    // )
    res.render('result.ejs',{
        title:'GET',
        userInfo:req.query ,//{id,email, password}
    })
})
app.listen(port, function() {
    console.log(`Server is running at http://localhost:${port}`);
});
