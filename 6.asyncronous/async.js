let product, price;

function goMart() {
    console.log("마트에 들어가서 어떤 음료를 살지 고민");
}

function pickDrink() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("고민 끝");
            product = "콜라";
            price = 2000;
            resolve({ product, price }); // 객체로 product와 price 반환
        }, 3000);
    });
}

function pay({ product, price }) { // 구조 분해 할당 사용
    console.log(`상품명: ${product}, 가격: ${price}`);
}
async function execute(){
    goMart();
    await pickDrink();
    pay();
}

