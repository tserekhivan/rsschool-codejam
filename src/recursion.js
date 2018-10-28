let array = [];

function solve(tree, level = 0) {
  if (array[level] === undefined) {
    array[level] = [];
  }
  Object.keys(tree).forEach((key) => {
    if (key === 'value') {
      array[level].push(tree[key]);
    } else {
      solve(tree[key], level + 1);
    }
  });
  return array;
}

module.exports = function recursion(tree) {
  array = [];
  return solve(tree);
};
