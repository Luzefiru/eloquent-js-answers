/*
Arrays have a reverse method that changes the array by inverting the
order in which its elements appear.

For this exercise, write two functions,
reverseArray and reverseArrayInPlace.

The first, reverseArray, takes an array
as argument and produces a new array that has the same elements in the
inverse order.

The second, reverseArrayInPlace, does what the reverse
method does: it modifies the array given as argument by reversing its elements.

Neither may use the standard reverse method.
*/

const inp = [1, 2, 3];

const reverseArray = (arr) => {
  const output = [];

  for (e of arr) {
    output.unshift(e);
  }

  return output;
};

const reverseArrayInPlace = (arr) => {
  // create a reversed version of the array
  const reversedArray = [];
  for (e of arr) {
    reversedArray.unshift(e);
  }

  // splice it with side effects on the original reference to the {arr}
  arr.splice(0, arr.length, ...reversedArray);
};
