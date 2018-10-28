module.exports = function sumOfOther(array) {
  return array.map((current, index) => array.reduce((accum, value, index2) => ((index !== index2)
    ? accum + value : accum), 0));
};
