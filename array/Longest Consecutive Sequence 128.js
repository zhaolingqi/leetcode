/**
 * 给定一个未排序的整数数组，找出最长连续序列的长度。
 * 要求算法的时间复杂度为 O(n)。
 * 输入: [100, 4, 200, 1, 3, 2]
 * 输出: 4
 * 解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
 */
/** */
/**
 * 将数组中的元素放入set中
 * 遍历数组元素x
 * 若不存在x-1，则往后搜寻
 * 若存在x - 1， 则跳过搜寻
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let numSet = new Set();
  let maxLength = 1;
  let curLength = 1;
  for(const num of nums) {
    numSet.add(num);
  };
  for(let num of nums) {
    if(numSet.has(num - 1)) {
      continue;
    };
    curLength = 1
    while(numSet.has(num + 1)) {
      curLength ++;
      num = num + 1;
    };
    maxLength = maxLength > curLength ? maxLength : curLength;
  }
return maxLength;
};