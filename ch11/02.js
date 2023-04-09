/*
Given an array of promises, Promise.all returns a promise that waits for all
of the promises in the array to finish. It then succeeds, yielding an array of
result values. If a promise in the array fails, the promise returned by all fails
too, with the failure reason from the failing promise.
Implement something like this yourself as a regular function called
Promise_all.

Remember that after a promise has succeeded or failed, it can’t succeed
or fail again, and further calls to the functions that resolve it are ignored.
This can simplify the way you handle failure of your promise.
*/
const Promise_all = async (promiseArray) => {
  return new Promise((resolve, reject) => {
    const results = [];

    // for each promise, unshift the resolved values to the array
    for (let promise of promiseArray) {
      promise
        .then((value) => {
          results.unshift(value);
        })
        .catch((error) => {
          reject(error);
        });
    }

    // push the final resolution to the macrotask queue to give leeway for rejections
    setTimeout(() => {
      resolve(results);
    }, 0);
  });
};

const promise1 = new Promise((resolve, reject) => {
  resolve(true);
});
const promise2 = new Promise((resolve, reject) => {
  resolve(true);
});
const promise3 = new Promise((resolve, reject) => {
  resolve(true);
});

Promise_all([promise1, promise2, promise3])
  .then(console.log)
  .catch(console.log);
