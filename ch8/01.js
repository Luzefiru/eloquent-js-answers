/*
Say you have a function primitiveMultiply that in 20 percent of cases
multiplies two numbers and in the other 80 percent of cases raises an
exception of type MultiplicatorUnitFailure.

Write a function that wraps this clunky function
and just keeps trying until a call succeeds, after which it returns the
result.

Make sure you handle only the exceptions you are trying to handle.
*/

class MultiplicatorUnitFailure extends Error {}

const primitiveMultiply = (a, b) => {
  // can only choose from range(0, 4) -> picking 0 is a 1/5 chance -> 20%
  // keeps trying until it succeeds
  try {
    if (Math.floor(Math.random() * 5) !== 0) {
      throw new MultiplicatorUnitFailure();
    }
  } catch (error) {
    if (error instanceof MultiplicatorUnitFailure) {
      console.log('Error: MultiplicatorUnitFailure');
      primitiveMultiply(a, b);
    }
  }

  return a * b;
};

console.log(primitiveMultiply(2, 2));
