/*
The == operator compares objects by identity. But sometimes you’d prefer to
compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if
they are the same value or are objects with the same properties, where the
values of the properties are equal when compared with a recursive call to
deepEqual.

To find out whether values should be compared directly (use the === operator for that)
or have their properties compared, you can use the typeof operator.

If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical accident,
typeof null also produces "object".

The Object.keys function will be useful when you need to go over the
properties of objects to compare them.
*/

const deepEqual = (a, b) => {
  // catcher for anything not an object
  if (typeof a !== 'object' || typeof b !== 'object') {
    return a === b;
  }

  // check if keys match each other
  const propertiesOfA = Object.getOwnPropertyNames(a);
  for (property of Object.getOwnPropertyNames(b)) {
    // if property is not included in the propertiesOfA
    if (!propertiesOfA.includes(property)) {
      return false;
    }
  }

  // check for value equality since keys are the same
  for (let property of Object.keys(a)) {
    if (a[property] !== b[property]) {
      return false;
    }
  }

  return true;
};
