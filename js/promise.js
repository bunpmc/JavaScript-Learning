//Promises: represents an operation that hasn’t completed yet but is expected in the future.

//Tranh Callback hell
//Pyramid

//Pending: The initial state, neither fulfilled nor rejected.
//Fulfilled: The operation completed successfully.
//Rejected: The operation failed.

let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
})

p.then((message) => {
    console.log('This is in then ' + message);
}).catch((message) => {
    console.log('This is in catch ' + message);
})

//--Example--//
const userLeft = false;
const userWatchingCatMeme = false;

function watchCallback(callback, errorCallback) {
    if(userLeft) {
        errorCallback ({
            name: 'User Left',
            message: ':<'
        });
    } else if (userWatchingCatMeme) {
        errorCallback ({
            name: 'User watching cat meme',
            message: 'D :'
        });
    } else {
        callback ('Thumbs up !! owo)b');
    }
}

watchCallback((message) => {
    console.log('Success: ' + message);
}, (error) => {
    console.log('Failed: ' + error.name + ' ' + error.message);
});

function watchPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject ({
                name: 'User Left',
                message: ':<'
            });
        } else if (userWatchingCatMeme) {
            reject ({
                name: 'User watching cat meme',
                message: 'D :'
            });
        } else {
            resolve ('Thumbs up !! owo)b');
        }
    });
}

watchPromise().then((message) => {
    console.log('Success ' + message);
}).catch((error) => {
    console.log('Failed ' + error);
});

//-----Medium.com Exercises------//
//Exercise 1: Basic Promise
//Description
//In this exercise, we will create a simple promise that resolves after 2 seconds. This example will help you understand the basic structure and usage of promises in JavaScript.

//Create a new promise that resolves after 2 seconds.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved after 2 seconds');
    }, 2000);
});

//Log the result of the promise to the console.
promise.then((result) => {
    console.log(result);
});

//Exercise 2: Chaining Promises
//Description
//In this exercise, we will chain multiple promises together. Chaining promises allows you to execute a sequence of asynchronous operations in a specific order, where each operation depends on the result of the previous one.

const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolved after 2 seconds');
    }, 2000);
});

const secondPromise = firstPromise.then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved after 1 second');
        }, 1000);
    });
});

secondPromise.then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved after 3 seconds');
        }, 3000);
    });
}).then((message) => {
    console.log(message);
});

//Exercise 3: Handling Errors
//Description
//In this exercise, we will demonstrate how to handle errors in promises. 
//Proper error handling is crucial in asynchronous programming to ensure that issues are caught and managed gracefully

const errorHandling = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Rejected after 1 second');
    }, 1000);
});

errorHandling.catch((error) => {
    console.log(error);
});

//Exercise 4: Promise.all
//Description
//In this exercise, we will use Promise.all to run multiple promises in parallel. 
//This method is useful when you need to wait for several asynchronous operations to complete before proceeding.

const promise_1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let a = 1 + 1;

        if (a == 2) {
            resolve('Success');
        } else {
            reject('Failed');
        }
    }, 1000);
});

const promise_2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let a = 1 + 3;

        if (a == 2) {
            resolve('Success');
        } else {
            reject('Failed');
        }
    }, 1000);
});

Promise.all([promise_1, promise_2])
    .then((messages) => {
        console.log(messages);
        messages.forEach((messages, index) => {
            console.log(`Promise ${index + 1}: ${message}`);
        });
    }).catch((error) => {
        error.forEach((error, index) => {
            console.log(`Promises ${index + 1}: ${error}`);
        });
    });

//Exercise 5: Promise.race
//Description
//In this exercise, we will use Promise.race to return the first resolved promise. 
//This method is useful when you are interested in the result of the fastest promise, regardless of the other promises' states.
