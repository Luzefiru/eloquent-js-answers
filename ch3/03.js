/* 
Write a function countBs that takes a string as its only argument and
returns a number that indicates how many uppercase “B” characters there
are in the string.

Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.
*/

const countBs = (str) => {
  let count = 0;
  // for each index of the string
  for (let i = 0; i < str.length; i++) {
    // check if the letter in the current index is "B" and increment {count}
    if (str[i] === 'B') {
      count += 1;
    }
  }

  return count;
};

const countChar = (char, str) => {
  let count = 0;
  // for each index of the string
  for (let i = 0; i < str.length; i++) {
    // check if the letter in the current index is "B" and increment {count}
    if (str[i] === char) {
      count += 1;
    }
  }

  return count;
};
