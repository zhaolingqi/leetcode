/**
 * 
给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。

示例:

输入: [4, 6, 7, 7]
输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
说明:

给定数组的长度不会超过15。
数组中的整数范围是 [-100,100]。
给定数组中可能包含重复数字，相等的数字应该被视为递增的一种情况。
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let res = [];
  let N = nums.length;
  if(N <= 1) return res;
  let temp = [];
  for(let i = 0; i < N; i++) {
    temp.push(nums[i]);
    if(nums.indexOf(nums[i]) === i) {
      dfs(nums.slice(i + 1), temp.slice(0));
    }
    temp.pop();
  }
  console.log(res);
  return res;

  function dfs(tempNum, temp) {
    let len = tempNum.length;
    for(let i = 0; i < len; i++) {
      if(temp[temp.length - 1] <= tempNum[i]) {
        temp.push(tempNum[i]);
        if(tempNum.indexOf(tempNum[i]) === i) {
          res.push(temp.slice(0));
          if(i + 1 < len) {
            dfs(tempNum.slice(i + 1), temp.slice(0));
          }
        }
        temp.pop();
      }
    }
  }
};
findSubsequences([6,6,6])