function printSome<T>(x:T,y:T):T{
    console.log(x)
    console.log(y)
return y;
}

printSome<number>(1,2);
printSome<string>("hi","He");
function printSome2<T,K>(x:T,y:K):void{
    console.log(x);
    console.log(y);
}
printSome2<number,string>(1,"안녕하세요");


function arrLength<T>(arr: T[]): number {
    return arr.length;
  }
  

function getValue<T>(value:T){
    return value;
}

arrLength<number>([1,2,3,4,5,6,7,])
getValue<number[]>([1,2,3,4,5,6,7,])

function arrElement1<T>(arr: T[], index: number): T|boolean {
    if(arr.length<=index){
        return false;
    }
    else{    return arr[index];

}}
// ##### interface &generic
interface Phone<T> {
    company:string;
    createAt: Date;
    option:T,
}
//T타입으로 string을 사용
const iphone15:Phone<string>={
    company: "apple",
    createAt:new Date("2023-10-13"),
    option:"black",
};;

//T타입으로 객체타입 적용
type iphoneOption={
    color:string,
    storage:number;
}
const iphone16:Phone<iphoneOption>={
    company: "apple",
    createAt:new Date("2024-10-16"),
    option:{
        color:"silver",
        storage:256
    },
};
console.log("-------");
console.log(iphone15);
console.log(iphone16);
// 타입 스크립트는 초기화된 값을 바탕으로 타입을 자동추론함
let aa=2;
let bb="string";
let cc=true;
//aa="안녕하세요"; //불가능(aa가 number형으로 자동추론됨) 

