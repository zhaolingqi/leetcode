/**
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 * 说明：解集不能包含重复的子集。
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const N = nums.length;
  let res = [];
  let tempArr = [];
  trace(nums, 0);
  return res;
  function trace(nums, start) {
    res.push(tempArr.slice(0));
    if(start === nums.length) {
      return;
    }
    for(let i = start; i < N; i++) {
      tempArr.push(nums[i]);
      trace(nums, i + 1);
      tempArr.pop(nums[i]);
    }
  }
};
subsets([1,2,3])