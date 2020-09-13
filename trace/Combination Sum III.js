/**
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

说明：

所有数字都是正整数。
解集不能包含重复的组合。 

 */
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let res = [];
  if(k > 9) return res;
  let temp = [];
  for(let i = 1; i < 10; i++) {
    temp.push(i);
    trace(k, n - i, temp, i);
    temp.pop();
  }
  console.log(res);
  function trace(k, n, temp, num) {
    if(n < 0) return;
    if(temp.length > k) return;
    if(n === 0 && temp.length === k) {
      res.push(temp.slice(0));
      return;
    }
    for(let i = num + 1; i < 10; i++) {
      temp.push(i);
      trace(k, n - i, temp, i);
      temp.pop();
    }
  }
};
combinationSum3(3, 7)