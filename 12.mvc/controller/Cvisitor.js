const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
    res.render("index");
};
//GET/visitor
exports.getVisitors = (req, res) => {
   

    Visitor.getVisitors((result)=>{
        console.log("Cvisitor.js 전체목록",result);
        res.render("visitor",{data:result})
    });
};
exports.postVisitor=(req,res)=>{
    console.log(req.body)//{id, name, comment}
    Visitor.postVisitor(req.body,(result)=>{
        console.log("Cvisitor.js post",result);
        res.send({id: result,name:req.body.name, comment:req.body.comment})
;    });
}

exports.deleteVisitor=(req,res)=>{
    console.log(req.body);
    console.log(req.body.id);
    Visitor.deleteVisitor(req.body.id,(req,res)=>{
        console.log('cvisitor.js delete',result);
        res.send("몇번 반복문 삭제완료");

    });
};
