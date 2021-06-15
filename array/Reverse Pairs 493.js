/**
 * 给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。

你需要返回给定数组中的重要翻转对的数量。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  if (nums.length === 0) {
      return 0;
  }
  return reversePairsRecursive(nums, 0, nums.length - 1);
};
const reversePairsRecursive = (nums, left, right) => {
  if (left === right) {
    return 0;
  } else {
    const mid = Math.floor((left + right) / 2);
    const n1 = reversePairsRecursive(nums, left, mid);
    const n2 = reversePairsRecursive(nums, mid + 1, right);
    let ret = n1 + n2;
    
    let i = left;
    let j = mid + 1;
    while (i <= mid) {
      while (j <= right && nums[i] > 2 * nums[j]) {
        j++;
      }
      ret += j - mid - 1;
      i++;
    }
    
    const sorted = new Array(right - left + 1);
    let p1 = left, p2 = mid + 1;   
    let p = 0;
    while (p1 <= mid || p2 <= right) {
      if (p1 > mid) {
        sorted[p++] = nums[p2++];
      } else if (p2 > right) {
        sorted[p++] = nums[p1++];
      } else {
        if (nums[p1] < nums[p2]) {
          sorted[p++] = nums[p1++];
        } else {
          sorted[p++] = nums[p2++];
        }
      }
    }
    for (let k = 0; k < sorted.length; k++) {
      nums[left + k] = sorted[k];
    }
    return ret;
  }
}
reversePairs([2,4,3,5,1]);