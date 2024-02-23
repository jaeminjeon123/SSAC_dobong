const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user: "sesac",
    password: "1234",
    database: "sesac"
});

exports.getVisitors = (cb) => {
    conn.query("SELECT * FROM visitor", (err, rows) => {
        if (err) {
            throw err; 
        }
        console.log("visitor.js 전체목록", rows);
        cb(rows); 
    });
};
//데이터 등록
//POST/visitor
exports.postVisitor=(data,cb)=>{
//    data={name:'진영',commnet:'발렌타인이군요'}
    conn.query(
        `INSERT INTO visitor VALUE(null,${data.name},${data.comment})`,
        (err,rows)=>{
            if(err)throw err;
            console.log('Visitor.js post',rows);
        cb(rows.insertid);

        }
    )
}
exports.deleteVisitor=(id,cb)=>{
    console.log(id);
    conn.query(`delete from visitor where id =${id}`,
    (err,rows)=>{
        if(err)throw err
        console.log('visitor.js delete',rows)
        cb(rows);
    });
};