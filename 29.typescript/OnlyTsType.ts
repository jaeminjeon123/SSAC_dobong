//tuple
//튜플:개수와 데이터 타입의 순서가 정해져있는 배열
let drink:[string,string]=["a","B"];
let drink2:[string,string,number];
drink2=["cola","콜라", 1 ];
console.log(drink2)
console.log(drink2[0]);
console.log(...drink2);
drink2.push('push되나요');
drink2[0]="사이다"
//부족한건 안 되도 넘치는건 가능
//drink2.push(null)  typescript의 type 추론 
/*
네번째 데이터 타비은 이밀 선언되어 있찌 않지만
string,number로만 이루어진 튜플을 선언했기 때문에
타입스크립트가 자동으로 타입을 추론해서 결정함(string|number)[]
*/
let drink3:readonly[string,number]=["cola",2001];
// drink3[0]="cider" 불가능 
// drink3.push("push되나요") 수정불가
enum Auth{
    admin=0,
    user=1,
    guest=2,
}
enum Cafe{
    americano="아메리카노",
    latte="라뗴"
}
console.log(Auth.admin)
console.log(Auth.user)
console.log(Cafe.americano)
console.log(Cafe.latte);
//Cafe.user=3; enum은 선언하고 나면 변경할 수 없습니다.
enum Cake{
    choco,
    vanilla,
    strawberry,
    kiwi="kiwi",
    
}
console.log(Cake.choco)
console.log(Cake.vanilla)
console.log(Cake.strawberry)
console.log(Cake.kiwi);
let olimpic_newgame: readonly [object, boolean];
olimpic_ne.,wgame=[
    {name:"쇼트트랙",
    type:"혼성계주"},
    true,
];

//---------interface&type-------

interface Student{
    name:string;
    isPassed:boolean;
}
const student1 :Student ={
    name:"alle",
    isPassed:true,
}
type Score='A+'|'A'|'B'|'B+'|'C'|'D'|  'F';
interface 야구부 extends Student{
    position:string;
    height:number;
    weight:number,
    readonly backNumber ?:number; //필수값이아님: ? 처리
[grade:number]:Score;
//KEY가 숫자형인게 여러개 올 수 있다
//[test:string]:string;
}

const otani:야구부={
    name:"오타니",
    isPassed:true,
    position:"pitcher",
    weight:95.3,
    height:193,
    backNumber:17,
    1:"A+",

    
};
console.log(otani);

otani.isPassed=false;
console.log(otani);
otani["2"]="B+";
console.log(otani);

const junghoo:야구부={
    name:'이정후',
    isPassed:true,
    position:'hiter',
    weight:88
    ,
    height:185,

}
console.log(junghoo);
interface Calc{
    (a:number,b:number): number;
}
const sum:Calc=function(num1,num2){
    return num1+num2;

}
console.log(sum(1,2,));

interface Toy{
    name:string;
    start():void;
}
interface Car{
     name:string;
     color: string;
     price:number;
}
//교차타입: 모든 타입을 만족해야합니다
const toyCar:Toy&Car={
    name:"타요",
    color:"blue",
    price:50000,
    start(){
        console.log(`${this.name}의 가격은 ${this.name}입니다` );
    }
};
toyCar.start();

//2. type
type Person={
    
name:string;
age?:number;
like?:string[];
gender:string;

};
type Gender="Female"|"Male";
type Person2={
    
    name:string;
    age?:number;
    like?:string[];
    gender:string;
    
    };
let daniel: Person={
    name:"다니엘",
    gender:"Female",
    age:20,
};
daniel.gender="여성";
daniel.gender="femail"
let c:Person2={
    name:"A",
    age:20,
    gender:"male",
}

interface Game{
title:string;
price:number;
desc?:string;
category:string;
platform:string;
};
let heroGame_A:Game = {
    title: 'DC 언체인드',
    price: 50000,
    desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
    category: '액션',
    platform: '모바일'
    };
    let heroGame_B:Game = {
    title: 'MARVEL 퓨처파이트',
    price: 65000 ,
    category: '롤플레잉',
    platform: '모바일'
    };
    