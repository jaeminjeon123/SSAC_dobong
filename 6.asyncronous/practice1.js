let name,txt,message;

function call(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(name);
            resolve(name);
        }, 1000);
    });
}

function back(txt) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("back");
            resolve(txt + "을 실행했구나");
        }, 1000);
    });
}

function hell(message) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("callback hell");
        }, 1000);
    });
}


  async function execute() {
  const name = await call("kim");
  console.log(name + "반가워");
  const txt = await back();
  console.log(txt + "을 실행했구나");
  const message = await hell();
  console.log("여기는 " + message);
}
execute();