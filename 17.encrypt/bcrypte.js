const bcrypt=require("bcrypt"); //강력한 암호화 모듈
//솔트의 라운드 수 정리 >> 해시함수의 반복을 의미
// 숫자가 크면 안전하지만, 숫자가 크면 클수록 성능 저하를 의미함 
const saltRound=10;

//1.회원가입 >>해시 값 생성
function hashPW(pw){
    
    //hashSync(비밀번호, 솔트라운드) // 리턴값은 암호화된 분자(string)
    return bcrypt.hashSync(pw,saltRound);
}

//2. 로그인 >> 해시값 일치 확인
function comparePW(inputPw,hashedPw){
    //compareSync(원본비밀번호,해시된 비밀번호)
return bcrypt.compareSync(inputPw,hashedPw);//리턴값은 t or f
}
//비밀번호에 대한 해시값 생성
//회원가입 작업시 활용
const originalPassword="12345"
const hashedPw=hashPW(originalPassword);
console.log("암호화된 비밀번호 >>",hashedPw);

// 비밀번호 일치 여부 확인
//로그인 작업시 활용
const isMatch=comparePW('12345',hashedPw);
const isMatch2=comparePW('1234',hashedPw);
console.log("비밀번호 일치",isMatch)
console.log("비밀번호 일치",isMatch2)