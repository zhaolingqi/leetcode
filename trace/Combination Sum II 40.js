/**
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

candidates 中的每个数字在每个组合中只能使用一次。

说明：

所有数字（包括目标数）都是正整数。
解集不能包含重复的组合。 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let N = candidates.length;
  let res = [];
  let tempRes = [];
  candidates = candidates.sort((a, b) => a - b);
  console.log(candidates);
  for(let i = 0; i < N; i++) {
    if(i > 0 && candidates[i] === candidates[i - 1]) continue;
    tempRes.push(candidates[i]);
    trace(candidates, target - candidates[i], tempRes.slice(0), i);
    tempRes.pop();
  }
  console.log(res);
  function trace(candidates, target, tempRes, count) {
    if(target === 0) {
      res.push(tempRes);
      return;
    }
    if(target < 0) {
      return;
    }
    for(let i = count + 1; i < N; i++) {
      if(i > count + 1 && candidates[i] === candidates[i - 1]) continue;
      tempRes.push(candidates[i]);
      trace(candidates, target - candidates[i], tempRes.slice(0), i);
      tempRes.pop();
    }
  }
};

combinationSum2([10,1,2,7,6,1,5], 8);