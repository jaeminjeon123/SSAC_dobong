/* 1. for문 */
/* 
for(변수 선언과 초기값 할당;조건식(어디까지 증가?감소?);증감식){
    반복할 코드;
}
*/

for(let i = 0; i < 10 ; i=i+1){
    console.log('안녕',i);
}

for(let i = 0; i < 10 ; i += 2){
    console.log(`안녕하세요 ${i}`);
}

// 1부터 5까지 출력하는 방법
for(let i = 1; i <= 5; i++ ){
    console.log(i)
}
for(let i = 1; i < 6; i++ ){
    console.log(i)
}
for(let i = 0; i < 5; i++ ){
    console.log(i+1)
}

// 감소
for(let i=5; i > 0 ; i--){
    console.log(i)
}

// 1부터 n까지의 덧셈
let n = 11;

let sum1 = 0;
// sum1 = 0+'1+2+3,,,,+ n(11)'
console.log('==========')
for(let i = 1 ; i < n + 1; i++){
    console.log(i);
    // sum1=0 + 1
    // sum1=0 + 1 +2
    // sum1=0 + 1 +2 +3 ... + n
    // sum1 = sum1 + i;
    sum1 += i;
}

console.log(sum1);

/* 배열과 함께 사용하는 for문 */
let fruits =['사과', '망고', '오렌지', '망고스틴'];
console.log(fruits.length); // 배열의 길이 확인
// fruits[0]
// fruits[1]
// fruits[2]
for(let i = 1; i <= fruits.length ; i++){
    console.log('i like', fruits[i-1])
}

// 배열 요소의 합 구하기
let numsArr = [99, 99, 98, 85, 77];
let sum2 = 0; 
for(let i = 0; i< numsArr.length; i++){
    sum2 += numsArr[i]
}

console.log(sum2)