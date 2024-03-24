function SyntheticEvent(){
    function printInputValue(e){
        console.log(e);
    }
    function printInputValue(e){
        console.log(e.target.value);
    }
    return(
        <div>
            <button onClick={{SyntheticEvent}}>콘솔이벤트 콘솔찍기</button>
           
            <br />
            <input type="text" placeholder="입력" onChange={printInputValue} />
        </div>
    )
}

export default SyntheticEvent;