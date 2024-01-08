// 함수 
//  어떤 작업을 수행하힉 위해 독립적으로 설계된 코드의 집합
//  함수를 정의(선언)하고 호출(사용)
//  선언방식 3가지
//     함수 선언문
//         선언 후 어디서나 사용 가능
//     함수 표현식
//         선언 이후에만 사용 가능
//     화살표 함수
//         화살표 함수와 함수 표현식은 변수에 익명함수를 담아둔 모양
//         화살표 함수와 함수 표현식은 동일함 (모양만 다름)

// 함수 선언문
helloworld();

function helloworld(){
    console.log("hello world1!!!!");

}
helloworld();
helloworld();
//함수 표현식
const helloworld2=function(){
    console.log("hello world2");
}
helloworld2();

//화살표 함수
const helloworld3=()=>{
    console.log("hello world3");
}
helloworld3();

//함수에 인자(paramenter) 전달
function add(num1,num2){
console.log(num1+num2);


}
// return
// 반환 값으로 함수 내부 코드의 '최종 결과값을 가지고 있다'
add(1,2);
function add1(num1,num2){
    
    console.log('리턴 전에는 실행이 잘되요');
    return(num1+num2);//데이터 저장
    console.log('리턴 이후에는 실행이 안되요')
    }
    console.log(add1(3,5));
    const result1=add1(3,5);
    const result2=add1(3,2);
    console.log(result2);    

    const sayhello= function(text){
        return text;
    }

    console.log(sayhello('allie'));

    function sayhello2(text,name){
        retrun `${text} $(name)`
    }

    console.log(sayhello2('hi','allie'));
    
    //함수 표현식(sayhello),화살표 함수 
    