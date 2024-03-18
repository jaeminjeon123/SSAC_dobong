export default function UseJSX(){
    // const divstyle={
    //     width:"100px",
    //     height:"100px",
    //     backgroundColor:"gray",
    //     textAlign:"center",
    //     color:"green",
    //     marginTop:".5rem",
    //     display:"2px solid red",
    // }
    // return (
    //     <div>
    //     <div style={{color: "white",width:"100px", backgroundColor:"tomato"}}>first</div>
    //     <div style={divstyle}>second</div>
    //     <div style={divstyle}>third</div>
    //     <div style={divstyle}>fourth</div>
    //     <div>fifth</div>
    //         </div>
    // );
   

    //js 문법 사용해보기
    let isShow=true;
    function myfunc(){
        alert("안녕 내이름은진형이야");
    }
    function add(a,b){
        return a+b;
    }
    return (
    <div>
        {/* <span>{myfunc()}</span> */}
    <div style={{backgroundColor:"orange",}} onClick={()=>alert("눌림")} >{isShow ? "true일떄 보임":"!!!"}</div>
    <div style={{background:"red"}}> {isShow && "true일떄 보임"}</div>
    <div style={{backgroundColor:"skyblue"}} onClick={myfunc()}  >{isShow===false? "isShow가  fals이군요":"true이군요" } </div>
    <div style={{backgroundColor:"purple"}}> {!isShow&&"false일 떄 보임"} </div>
    
        <div onClick={()=> add(8,5)}>8더하기 5의 결과는 alert로 확인해요</div>
        <div onClick={()=>myfunc()}> </div>
    </div>
   ) 


}