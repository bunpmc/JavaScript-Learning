// Promises: represents an operation that hasn’t completed yet but is expected in the future.
// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: Operation completed successfully.
// Rejected: Operation failed.

// Example: Basic Promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation Successful!");
  } else {
    reject("Operation Failed!");
  }
});

myPromise
  .then((message) => {
    console.log("Resolved:", message);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  });

// Example: Handling Errors
const errorHandling = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected after 1 second");
  }, 1000);
});

errorHandling.catch((error) => {
  console.log("Error Handling:", error);
});

// Example: Promise.all
const promise_1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1 Success!"), 1000);
});

const promise_2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2 Failed!"), 1000);
});

Promise.all([promise_1, promise_2])
  .then((results) => {
    results.forEach((result, index) => {
      console.log(`Promise ${index + 1}: ${result}`);
    });
  })
  .catch((error) => {
    console.log("Promise.all error:", error);
  });

// Example: Promise.race
const participant_1 = new Promise((resolve) => {
  setTimeout(() => resolve("Participant 1 Wins!"), 2000);
});

const participant_2 = new Promise((resolve) => {
  setTimeout(() => resolve("Participant 2 Wins!"), 1000);
});

const participant_3 = new Promise((resolve) => {
  setTimeout(() => resolve("Participant 3 Wins!"), 3000);
});

Promise.race([participant_1, participant_2, participant_3])
  .then((winner) => {
    console.log("Race Winner:", winner);
  })
  .catch((error) => {
    console.log("Race Error:", error);
  });

// Example: Promise.allSettled
const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("P1 Success"), 1000);
});
const p2 = new Promise((_, reject) => {
  setTimeout(() => reject("P2 Failed"), 1000);
});
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("P3 Success"), 1000);
});

Promise.allSettled([p1, p2, p3]).then((results) => {
  results.forEach((result, index) => {
    console.log(`Promise ${index + 1}:`, result);
  });
});

// Example: Promise.any
const pr1 = new Promise((_, reject) => {
  setTimeout(() => reject("PR1 Failed"), 1000);
});
const pr2 = new Promise((resolve) => {
  setTimeout(() => resolve("PR2 Success"), 2000);
});
const pr3 = new Promise((resolve) => {
  setTimeout(() => resolve("PR3 Success"), 1500);
});

Promise.any([pr1, pr2, pr3])
  .then((firstSuccess) => {
    console.log("First Fulfilled Promise:", firstSuccess);
  })
  .catch((error) => {
    console.log("Promise.any Error:", error);
  });

// Example: Chaining Promises
const firstPromise = new Promise((resolve) => {
  setTimeout(() => resolve("First Promise Resolved"), 2000);
});

firstPromise
  .then((message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => resolve("Second Promise Resolved"), 1000);
    });
  })
  .then((message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => resolve("Third Promise Resolved"), 3000);
    });
  })
  .then((message) => {
    console.log(message);
  });
