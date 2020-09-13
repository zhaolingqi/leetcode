/**
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的数字可以无限制重复被选取。
 * 
 * 说明：
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

  let N = candidates.length;
  let res = [];
  let tempRes = [];
  for(let i = 0; i < N; i++) {
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
    for(let i = count; i < N; i++) {
      tempRes.push(candidates[i]);
      trace(candidates, target - candidates[i], tempRes.slice(0), i);
      tempRes.pop();
    }
  }
};
combinationSum([2,3,5], 8);
