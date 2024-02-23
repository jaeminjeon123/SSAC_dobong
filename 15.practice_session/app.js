const express = require("express");
const PORT = 8480;
const app = express();
const session = require("express-session");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const userInfo={userId:"cocoa",userPw:"1234"}
// TODO: 세션 설정
// 세션 설정
app.use(session({
    secret: 'mySecretKey', 
    resave: false, 
    saveUninitialized: true,
  }));
  
// app.use();
//index에 session정보 전달
app.get("/", (req, res) => {
    if(req.session.user) {
      // 로그인 된 상태
      res.render("index", { isLogin: true, user: req.session.user });
    } else {
      // 로그인 되지 않은 상태
      res.render("index", { isLogin: false });
    }
  });
  
app.get("/login", (req, res) => {
  res.render("login");
});

// TODO: 로그인 기능
//1.세션 설정
app.post("/login", (req, res) => {
    const { userId, userPw } = req.body; 
    
    if(userId === userInfo.userId && userPw === userInfo.userPw){
     
      req.session.user = { id: userId };
      res.redirect("/");
    } else {
      res.redirect("/login"); 
    }
  });
// TODO: 로그아웃 기능
//3.세션 삭제
app.post("/logout", (req, res) => {
    const user=req.session.user;
    
    req.session.destroy(); 
    res.redirect("/"); 
  });
  
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});