// 1. Callback Example
function sum(callback, a, b) {
  let result = a + b;
  callback(result);
}

function display(result) {
  console.log("Sum Result:", result);
}

function displayPage(result) {
  // Assuming you have an element with id="myH1" in your HTML
  document.getElementById("myH1").innerHTML = result;
}

sum(displayPage, 1, 2);

//-------------------------//

// 2. Simple Callback: Convert string to uppercase
function toUpperCase(str, callback) {
  callback(str.toUpperCase());
}

function output(str) {
  console.log("Uppercase String:", str); // Logging for simplicity
  // Alternatively, display in HTML element
  // document.getElementById("myH1").innerHTML = str;
}

toUpperCase("hello world", output);

//-------------------------//

// 3. Callback with Array
function forEachElement(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

function logElement(element) {
  console.log("Array Element:", element);
}

forEachElement(["a", "b", "c"], logElement);

//-------------------------//

// 4. Asynchronous Callback
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

//-------------------------//

// 5. Calculate using callback
function calculate(a, b, callback) {
  return callback(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log("Add:", calculate(2, 3, add));
console.log("Multiply:", calculate(2, 3, multiply));

//-------------------------//

// 6. Array with Callback
function filterArray(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

function isOdd(num) {
  return num % 2 !== 0;
}

function isEven(num) {
  return num % 2 === 0;
}

function isGreaterThanFive(num) {
  return num > 5;
}

console.log("Even Numbers:", filterArray([1, 2, 3, 4, 5, 6, 7, 8], isEven));
console.log(
  "Numbers Greater than 5:",
  filterArray([1, 2, 3, 4, 5, 6, 7, 8], isGreaterThanFive)
);

//-------------------------//

// 7. Handling Errors with Callback
function processData(data, successCallback, errorCallback) {
  if (data) {
    successCallback(data);
  } else {
    errorCallback("No data provided");
  }
}

function onSuccess(data) {
  console.log("Data processed successfully:", data);
}

function onError(error) {
  console.log("Error:", error);
}

processData(null, onSuccess, onError);
processData("Some data", onSuccess, onError);

//-------------------------//

// 8. Nested Callbacks
function fetchData(api, processCallback, displayCallback) {
  console.log(`Fetching data from ${api}...`);

  setTimeout(() => {
    const object = {
      id: 1,
      name: "John Doe",
      age: 30,
    };
    console.log("Data fetched:", object);
    const processedData = processCallback(object);
    displayCallback(processedData);
  }, 1000);
}

function process(data) {
  data.createdDate = new Date();
  return data;
}

function display(data) {
  console.log("Data processed:", data);
}

fetchData("https://api.example.com/data", process, display);

//-------------------------//

// 9. Error Handling with Callback
function fetchDataWithError(
  api,
  processCallback,
  displayCallback,
  errorCallback
) {
  console.log(`Fetching data from ${api}...`);

  setTimeout(() => {
    const isError = Math.random() > 0.5; // Simulate random error
    if (isError) {
      errorCallback("Failed to fetch data");
    } else {
      const object = {
        id: 1,
        name: "John Doe",
        age: 30,
      };
      console.log("Data fetched:", object);
      const processedData = processCallback(object);
      displayCallback(processedData);
    }
  }, 1000);
}

fetchDataWithError("https://api.example.com/data", process, display, onError);
