//Synchronous & Asynchronous

//Synchronous: xử lý đồng bộ, làm theo từng bước, hết bước 1 mới đến bước 2

//Asynchronous: xử lý bất đồng bộ, không nhất thiết phải hết bước 1 mới sang bước 2
//  -> setTimeout()

//Các cách xử lý bất đồng bộ

//1.Callback
//2.Promise
//3.Async / Await

//Callback
function asyncFunction(callback) {
  console.log("Start");
  //Thực hiện tác vụ bất đồng bộ sau 1s
  setTimeout(() => {
    callback();
  }, 1000);
  console.log("Waiting");
}

//Hàm callback
let printEnd = function () {
  console.log("End");
};

//Gọi hàm asyncFunction() với callback printEnd
asyncFunction(printEnd);

//Promise
let promise = new Promise((resolve, reject) => {});

const randomNumber = new Promise((resolve, reject) => {
  const url =
    "https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new";
  let request = new XMLHttpRequest();

  request.open("GET", url);
  request.onload = () => {
    if (request.status == "200") {
      resolve(request.response);
    } else {
      reject(Error(request.statusText));
    }
  };

  request.onerror = () => {
    reject(Error("Network Error"));
  };

  request.send();
});

randomNumber
  .then((res) => {
    console.log("Success");
    console.log("Random number: " + res);
  })
  .catch((err) => {
    console.log("Error: " + err.message);
  });