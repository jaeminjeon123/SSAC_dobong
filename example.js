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

function hell() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("callback hell");
        }, 1000);
    });
}

call("kim")
    .then(name => {
        console.log(name + "반가워");
        return back(name);
    })
    .then(txt => {
        console.log(txt);
        return hell();
    })
    .then(message => {
        console.log("여기는 " + message);
    });
