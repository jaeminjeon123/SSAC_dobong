// var 
// 재할당,재선언 모두 가능
// 재선언:바람직하지 않음(중복 선언)
var name ="홍길동";
var name="홍길동3"
console.log(name);

// let
// 재선언 불가능
// 재할당 가능
// 초기화 작업 필요 없음(최초 언선이 값 할당하지 않아도 됨)
let c;
c=10;
console.log(c);

// const 
// 재선언, 재할당 모두 불가
// 변하지 않는 값을 변수에 저장할 때 사용
// 최초 선언시 반드시 값 할당(초기화)

// const b 초기화 해야함 , 재할당은 불가
const b=10;

let q1=3;
q1=q1-3;
console.log(q1);
//비교 연산자
//(참고) = 은 대입연산잔
//  ! 1. == (값만 비교하는 연산자)
console.log('== 연산자')
console.log(1 ==2)
console.log(2 ==2)
console.log('2' ==2)
console.log('' ==0)
console.log(false =='0')
// 2. === (값과 데이터타입까지 비교)
console.log('=== 연산자')
console.log('1'===1) //false
console.log(undefined===null) //false
console.log(''===0) //false
console.log(1===1) //true

//산술 연산
console.log('산술 연산자')
console.log(1+2)
console.log(1-2)

//논리 연산
console.log('논리 연산자')
console.log(!true)
console.log(!!true)
console.log(!!false)
console.log(true && true)
console.log(true && true&&true&&false)
// ||
console.log(true||true) //true
console.log(true||false) //true
console.log(false||false) //false
console.log(!(2>1))//false
console.log(2>1&&-2<1)//true
console.log(2>1&&-2<1||2>5)//false

//문자와 변수를 같이 쓰는 방법
const str1="allie"
const str2="서울"
//allie는 서울에 삽니다.
//+연산자 이용 
console.log(str1+'는 ' +str2+'에 삽니다')
console.log(str1,'는',str2,'에 삽니다')
console.log(`${str1}는 ${str2}에 삽니다`) 


 