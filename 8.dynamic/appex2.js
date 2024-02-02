const express = require("express");
const app = express();
const PORT = 8140;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("indexex2");
});

const id='wjswoals02';
const password='wjswoals02';

// axios

app.post("/indexex2", (req, res) => {
    const realid=req.body.id;
    const realpassword=req.body.password;
    if(realid===id&&realpassword===password)res.send(true);
    else res.send(false);
  });

  



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});