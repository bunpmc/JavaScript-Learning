//callback = a function that is passed as an argument to another function

//Use to handle asynchronous operations:
//
//1. Fetch data from an API
//2. Reading a file
//3. Interact with a database

//"Hey when you done, call this function"

sum(displayPage, 1, 2);

function sum(callback, a, b) {
  let result = a + b;
  callback(result);
}

function display(result) {
  console.log(result);
}

function displayPage(result) {
  //document.getElementsByTagName("h1")[0].innerHTML = result;
  document.getElementById("myH1").innerHTML = result;
}

//-------------------------//
//Exercise 1: Simple Callback
//Problem
//The first step in our journey through callbacks in JavaScript is learning to convert a string to uppercase using a callback.
//This simple yet effective exercise introduces us to the concept of passing functions as arguments and helps us understand the power of higher-order functions.

//Solution

function toUpperCase(str, callback) {
  callback(str.toUpperCase());
}

function input() {
  return str;
}

function output(str) {
  document.getElementById("myH1").innerHTML = str;
}

toUpperCase(input, output);

//Exercise 2: Callback with Array
//Problem
//Now, let’s move to an exercise involving arrays and callbacks. Our goal is to apply a callback to every element of an array.
//This exercise helps us understand how callbacks can be used to manipulate and interact with complex data structures like arrays.

function forEachElement(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

function output(str) {
  document.getElementById("myH1").innerHTML = str;
}

forEachElement(["a", "b", "c"], output);

//Exercise 3: Asynchronous Callback
//Problem
//Asynchronicity is a cornerstone of JavaScript programming, especially in the context of network requests.
//In this exercise, we focus on how to simulate a network request and handle the response using a callback. This scenario is essential for understanding how JavaScript handles time-consuming operations, such as HTTP requests or reading files.

function asyncFunction(callback) {
  console.log("Starting operation...");

  setTimeout(() => {
    callback();
  }, 1000);

  console.log("Waiting...");
}

function finish() {
  console.log("Callback executed!");
}

asyncFunction(finish);

//4. Calculate using callback

function calculate(a, b, callback) {
  return callback(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(2, 3, add));
console.log(calculate(2, 3, multiply));

//5. Array with Callback

function filter(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

function isOdd(num) {
  return num % 2 != 0;
}

function isEven(num) {
  return num % 2 == 0;
}

function isGreaterThanFive(num) {
  return num > 5;
}

console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8], isEven)); // [2, 4, 6, 8]
console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8], greaterThanFive)); // [6, 7, 8]

//6. Xu ly loi voi Callback

function processData(data, successCallback, errorCallback) {
  if (data) {
    successCallback(data);
  } else {
    errorCallback("No data provided");
  }
}

function onSuccess(data) {
  console.log("Data processed successfully: ", data);
}

function onError(error) {
  console.log("Error: ", error);
}

processData(null, onSuccess, onError);
processData("Some data", onSuccess, onError);

//7. Callback long nhau

function fetchData(api, processCallback, displayCallback) {
  console.log(`Fetching data from ${api}...`);

  setTimeout(() => {
    const object = {
      id: 1,
      name: "John Doe",
      age: 30,
    };
    console.log("Data fetched: ", object);
    const processData = processCallback(data);
    displayCallback(processData);
  }, 1000);
}

function process(data) {
  data.createdDate = new Date();
  return data;
}

function display(data) {
  console.log("Data processed: ", data);
}

fetchData("https://api.example.com/data", process, display);

//8. Xay dung he thong xu ly Callback voi Loi

function fetchDataWithError(api, processCallback, displayCallback) {
  console.log(`Fetching data from ${api}...`);

  setTimeout(() => {
    const error = Math.random() > 2;
    if (error) {
      errorCallback("Failed to fetch data");
    } else {
      const object = {
        id: 1,
        name: "John Doe",
        age: 30,
      };
      console.log("Data fetched: ", object);
      const processData = processCallback(data);
      displayCallback(processData);
    }
  }, 1000);
}

function onError(error) {
  console.log("Error: ", error);
}

fetchDataWithError("https://api.example.com/data", process, display);
