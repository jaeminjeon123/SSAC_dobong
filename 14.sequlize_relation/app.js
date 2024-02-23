const express = require("express");
const app = express();
const PORT = 8080;
const router = require("./routes");
const { sequelize } = require("./models");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);
sequelize
.sync()
.then(() => { // 여기서 화살표 함수 구문을 올바르게 수정했습니다.
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
})
.catch((error) => { // 오류 처리를 위한 catch 블록 추가
    console.error('Unable to connect to the database:', error);
});