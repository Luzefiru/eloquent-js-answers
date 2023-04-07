/*
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};


Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument.

Also write a listToArray function that produces an array from a list.

Then add a helper function prepend,
which takes an element and a list and creates a new list
that adds the element to the front of the input list,

and nth,
which takes a list and a number and returns the element at the given position in the list (with zero referring
to the first element) or undefined when there is no such element.
*/

const arrayToList = (arr) => {
  // assign the last element to be the value of the last element of the array
  let outputList = { value: arr[arr.length - 1], rest: null };

  // start building the list from the second to last element
  for (e of arr.reverse().slice(1)) {
    outputList = { value: e, rest: outputList };
  }

  return outputList;
};

const prepend = (element, list) => {
  return { value: element, rest: list };
};

const nth = (list, element) => {
  // keep track of the current index and pointer to the current object nesting
  for (
    let ptr = list, currentIndex = 0;
    ptr !== null; // while the current pointed object is not null (the end)
    ptr = ptr.rest, currentIndex++ // traverse to the next nested object
  ) {
    if (ptr.value === element) {
      return currentIndex;
    }
  }

  // no early return means we reached null & element is not found
  return undefined;
};

const recursiveNth = (list, element, currentIndex = 0) => {
  // catchers for recursive calls
  if (list === null) {
    return undefined;
  } else if (list.value === element) {
    return currentIndex;
  }

  return recursiveNth(list.rest, element, currentIndex + 1);
};
