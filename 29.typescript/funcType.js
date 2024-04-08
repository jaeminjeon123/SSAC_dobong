function print(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
print(1, 2, 3);
// print(1, 2, 3, 4); //err
// print(1, 2); //err
function print2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
print2(1, 2, 3);
print2(1, 2);
// void type
function sayHello() {
    console.log("hello");
}
sayHello();
// string return
function concatStr(a, b) {
    return a + b;
}
// 원의 넓이를 구하는 함수
function circleArea(r) {
    return r * r * Math.PI;
}
console.log(concatStr("안녕", 2));
console.log(circleArea(5));
// 함수 표현식으로
var triangleArea = function (w, h) { return (w * h) / 2; };
console.log("삼각형의 넓이", triangleArea(2, 4));
var jh = {
    name: "allie",
    hi: function () {
        return "안녕 내 이름은 " + this.name + "이야";
    },
    bye: function (a) {
        return "\uC791\uBCC4\uC778\uC0AC\uB97C ".concat(a, "\uBC88 \uD588\uC2B5\uB2C8\uB2E4.");
    },
};
console.log(jh.hi());
console.log(jh.bye(5));
// never type
// 항상 함수의 끝에 절대 도달하지 않는 경우에만 never 타입 할당 가능
function goingOn(a) {
    while (true) {
        console.log("끝나지 않는 함수입니다.");
        // if (a > 10) break; // 특정 조건일 때 빠져나올 수 있음 >> never type X
    }
}
function addSomething(x, y) {
    return x + y;
}
addSomething(1, 1); //2
addSomething("안녕", "하세요"); // '안녕하세요'
console.log(addSomething(1, 1));
console.log(addSomething("안녕", "하세요"));
// addSomething(1,'2'); // 오버로딩을 통해 이런 함수 호출은 일어날 수 없음
function exsum(num1, num2) {
    return num1 + num2;
}
console.log(exsum(5, 11));
function exsum1() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (state, current) { return state + current; }, 0);
}
console.log(exsum1(4, 5, 5, 7));
