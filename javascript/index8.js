/*Data 객체
현재 시간 ,날짜에 대한 정보를 얻기 위해 사용
원하는 값으로초기화
 
 */
let now =new Date();
console.log(now);

//new date('날짜 문자열');
console.log(new Date('September 30,2000 13:00:00'));

console.log(now.getFullYear(),'년');
console.log(now.getMonth(),'월');
console.log(now.getDate(),'일');
console.log(now.getHours(),'시');
console.log(now.getMinutes(),'분');
console.log(now.getSeconds(),'초');
console.log(now.getMilliseconds(),'밀리초');
console.log(now.getDay(),'요일');

//Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT2);
//메소드
console.log(Math.min(1,2,3,4,5,6,7,8,9,-5,7,5));
console.log(Math.max(2,5,4,6,1,0,1,17,15));
console.log(Math.ceil(5.155)); //올림
console.log(Math.floor(5.655)); //내림
console.log(Math.round(5.51));//반올림
console.log(Math.random());
console.log(Math.floor(Math.random()*3));
console.log(Math.floor(Math.random()*45));
console.log(Math.floor(Math.random()*45)+1);
//object

const areaNum={
    seoul:'02',
    Incheon:'032',
    Busan:'051',
    Ulsan:'052',
    Gwanju:'062',
    Jeju:'064'
}
const area=Object.keys(areaNum);
const number=Object.values(areaNum);

console.log(area);
console.log(number);