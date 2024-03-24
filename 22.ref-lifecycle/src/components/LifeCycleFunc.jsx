import { useEffect } from "react";
import { useState } from "react"

function MyComponent({number}){
    const [text,setText]=useState();

    // useEffect(effect,deps)

    /*
    -effect: callback function
    콜백함수 내에 특정 시점에서 실행하고 싶은 코드 작성
    -deps
    생략: mount,update시 항상 동작
    []:mount되었을 때만 실행
    [data]: mount,date가 바뀌었을 때 실행(update, mount) 
    */

    //mount 되엇을 때
    useEffect(()=>{
        console.log('함수형 컴포넌트 mount!')
    },[]);
    //unmount 되엇을 때
    useEffect(()=>{
        return()=>{
            console.log("함수형 컴포넌트 unmount!")
        }
    })
    //update 되었을 때
    useEffect(()=>{
        {
            console.log("함수형 컴포넌트 | update될 때마다!")
        }
    });
    useEffect(()=>{
        {
            console.log("함수형 컴포넌트 | number 변경될 때마다!")
        }
    },[number]);
    return(
      <>  <p>MyComponent {number}</p>
        <input type="text" value={text} onChange={(e)=>{
            setText(e.target.value)
        }} />
    </>
    )
    
}

export default function LifeCycleFunc(){
    const [number,setNumber]=useState(0);
    const [visible,setvisible]=useState(1);
    const changeNumberState=()=>setNumber(number+1)
    const  chnageVisibleState=()=>setNumber(!visible)
    return(
        <>
        <button>number +1</button>
        <button>on/off</button>
        {visible&&<MyComponent number={number} />}
        </>
    )
}