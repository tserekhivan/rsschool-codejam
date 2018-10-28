module.exports = function make(...args) {
  const array = [];
  array.push(...args);
  return function fn(...argsFn) {
    if (typeof argsFn[0] === 'function') {
      const func = argsFn[0];
      return array.reduce((current, value) => func(current, value));
    }
    array.push(...argsFn);
    return fn;
  };
};
