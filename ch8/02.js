/*
It is a box with a lock. There is an array in the box, but you can get at it
only when the box is unlocked. Directly accessing the private _content property is forbidden.

Write a function called withBoxUnlocked that takes a function value as
argument, unlocks the box, runs the function, and then ensures that the
box is locked again before returning, regardless of whether the argument
function returned normally or threw an exception.
*/

const box = {
  locked: false,
  unlock() {
    this.locked = false;
  },
  lock() {
    this.locked = true;
  },
  _content: [],
  get content() {
    if (this.locked) throw new Error('Locked!');
    return this._content;
  },
};
function withBoxUnlocked(body) {
  let lockedFlag = false;
  // bonus points, calls unlock() only if the box is locked, otherwise, box is already unlocked
  if (box.locked) {
    box.unlock();
    lockedFlag = true; // the box was locked when we received it
  }
  // Your code here.
  try {
    body();
  } catch (error) {
    console.log(error);
  } finally {
    // if it was not locked when we received it, then don't lock it anymore
    if (lockedFlag === false) {
      box.lock();
    }
  }
}

withBoxUnlocked(function () {
  box.content.push('gold piece');
});

try {
  withBoxUnlocked(function () {
    throw new Error('Pirates on the horizon! Abort!');
  });
} catch (e) {
  console.log('Error raised:', e);
}
console.log(box.locked);
// → true
