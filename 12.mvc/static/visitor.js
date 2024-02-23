//방명록 등록

const { response } = require("express");
const tbody=document.querySelector("tbody");
//post/visitor
function createVisitor(){
    const form=document.forms["visitor-form"];
    console.log(form);

    if(form.name.vlaue.length==0|| form.comment.vlaue.length==0){
alert("이름과 방명록 모두 기입")
return
      
};
if(form.name.vlaue.length>6){
    alert("이름은 6글자 이하")
return;
}
axios({
    method:"POST",
    url:"/visitor",
    data:{
        name:form.name.vlaue,
        comment:form.comment.vlaue,
    }
})
.then((response)=>{
console.log(response.data);
const{data}=response;
const html=`

    <tr>
      <td><%=data[i].id %></td>
      <td><%=data[i].name %></td>
      <td><%=data[i].comment %></td>
      <td>
        <button type="button" onclick="editVisitor('<%=data[i].id%>')">
          수정
        </button>
      </td>
      <td>
        <button
          type="button"
          onclick="deleteVisitor(this,'<%=data[i].id%>')"
        >
          삭제
        </button>
      </td>
    </tr>
`;




}
);
}
//방명록 삭제
//Delete/visitor
function deleteVisitor(btn,id){}
//방명록 수정
//PATCH/visitor
function editVisitor(id){}