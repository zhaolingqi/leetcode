/**
 * 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。
 */
/**
 * 尝试将原数组改造成哈希表，
 * 首先，对于长度为N的数组，遍历，将所有小于等于0的数变成大于N的任意正整数。
 * 其次，在遍历过程中，对于数x，取绝对值，并将数组中位置为x-1的数变为负数（若已经为负数，则不必改变）。
 * 最后找到一个不为负数的数的位置，若均为负数，则为N + 1
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let N = nums.length;
  for(const i in nums) {
    nums[i] = nums[i] <= 0 ? N + 1 : nums[i];
  }
  for(const i in nums) {
    let x = Math.abs(nums[i]);
    nums[x - 1] = nums[x - 1] < 0 ? nums[x - 1] : -nums[x - 1];
  }
  for(let i = 0; i < N; i++) {
    if(nums[i] > 0) return i + 1;  
  }
  return N + 1;
};
let res = firstMissingPositive([3,4,-1,1,2,-5]);
console.log(res);