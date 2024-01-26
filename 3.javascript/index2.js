// 1. string (문자열) 
 /* 텍스트 정보
    숫자,특수 문자도 따옴표 안에 있는 문자열
    따옴표안에 따옴표가 있다면
    "안에 '작은 따옴표'가 있어요"
    '안에 "큰 따옴표"가 있어요'


 */

let myname="진형";
let number1='128';
console.log(myname,number1);
// 2. number (숫자)
let number2=128
let opacity=0.7
console.log(number2,opacity);
//NaN (not a number)
console.log('apple' -3);
// 3. boolean
//true 나 false
let checked =true;
let isShow= false;
console.log (checked,isShow);

// 4.undefined
//값도 없고 타입도 지정되어 있지 않은 상태
let undef;
console.log(undef);

let empty=null;
console.log(empty);

//5. 배열(array)
let fruits=["orange","pineapple","strawberry"];
console.log(fruits[2]); 

let data=[22,'22',false];
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);

const korean=[


["가","나","다"],
["라","마","바"],
["사","아","자"]

];

console.log(korean[0][2]);
const letters = [
	["사", "스", "자", "크"],
	["진", "안", "리", "이"],
	["가", "수", "림", "나"],
	["아", "으", "차", "운"],
];
console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);


const nums =[

    [
        [1,2,3],
        [4,5,6]

    ],
    [
        [7,8,9],
        [10,11,12]
    ]


]

console.log(nums[1][0][1]);
// object
//{}
// 배열은 숭서가 있는 반면, object는 키, 값 형태로 저장
// 데이터에 접근시 key 이름을 이용해서 접근
// (키이름 :Va1 va2)

let cat={
    name:'나비',
    age:2,
    iscute: true,
    mew: function(){
        return '냐옹';
    }

}
console.log(cat.name);
console.log(cat.age);
console.log(cat.iscute);
console.log(cat.mew());
cat.like='tuna'
cat.age=3
console.log(cat)

//대괄호 표기법
let dog ={
    name:'coco',
    ispoodle:true,
    age:3,
    sibling:['max','lucy']
}
console.log(dog.name)
console.log(dog['name'])
console.log(dog['sibling'][1])
// // let mathScore = (prompt("수학 점수를 입력 하세요"));
// //  let engScore = (prompt("영어 점수를 입력 하세요"));
// //  let mathnumber=Number(mathScore);
// // //  let engnumber=Number(engScore);
// // //  let avg=(mathnumber+engnumber)/2;
// // //  console.log(avg);
// //  console.log(typeof '문자');
// //  console.log(typeof mathScore);
// //  console.log(typeof mathnumber);
// //  console.log(typeof true);
// //  console.log(typeof []);
// //  console.log(typeof {});
// //  console.log(typeof NaN);
// //  console.log(typeof null);
// //  console.log(typeof undefined);

// console.log('-----');
// let str1=-true;
// let str2=123;
// let str3=null; 

// console.log(String(str1));
// console.log(String(str2));
// console.log(String(str3));
// console.log(typeof String(str1));
// console.log(typeof String(str2));
// console.log(typeof String(str3));

// let n1=true;
// let n2=false;
// let n3=123;
// let n4='123';

// console.log(Number(n1))
// console.log(Number(n2))
// console.log(Number(n3))
// console.log(Number(n4))
// console.log(typeof Number(n4))
// console.log(parseInt(n4));

// // console.log(typeof 2. +" isn't "+typeof );
let math="77";
let eng="88";
let mathScore=(Number(math));
let engScore=(Number(eng));
let avgScore=(mathScore+engScore)/2;
console.log(avgScore);

