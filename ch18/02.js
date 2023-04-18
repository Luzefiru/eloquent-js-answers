const makeFunction = (code) => {
  return new Function(code);
};

const call = (fn) => {
  return fn();
};
