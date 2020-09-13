/**
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];
  let temp = [];
  if(k === 0) return [[]];
  for(let i = 1; i <= n - k + 1; i++) {
    temp.push(i);
    trace(i, temp);
    temp.pop(i);
  }
  console.log(res);
  function trace(num, temp) {
    if(temp.length === k) {
      res.push(temp.slice(0));
      return;
    }
    for(let i = num + 1; i <= n; i++) {
      temp.push(i);
      trace(i, temp);
      temp.pop(i);
    }
  }
};

combine(4,2)