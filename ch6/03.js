/*
Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return
the iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified
during iteration.
*/

class Group {
  constructor() {
    this.values = [];
  }

  static from(iterable) {
    const output = new Group();
    for (let element of iterable) {
      output.add(element);
    }

    return output;
  }

  add(value) {
    if (this.values.includes(value) === false) {
      this.values.push(value);
    }
  }

  delete(value) {
    if (this.values.includes(value) === true) {
      this.values.splice(this.values.indexOf(value), 1);
    }
  }
}

Group.prototype[Symbol.iterator] = function () {
  let index = 0;
  let arr = this.values;

  return {
    next: function () {
      return {
        done: !(index in Array.from(arr.keys())),
        value: arr[index++],
      };
    },
  };
};
