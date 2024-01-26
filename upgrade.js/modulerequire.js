//모듈을 불러서 사용

const{sayName}=require('./exports1');
const exports1=require('./exports1');
//sayName('no');
console.log(exports1);
exports1.sayName('no');

const [sayHi2,sayHi3]=require('./exports2');
sayHi2();
sayHi3('안녕하세요')