/**
实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const N = nums.length;
  if(N < 1) return;
  let j = N - 1;
  for (; j >= 1; j--) {
    if (nums[j] > nums[j - 1]) break;
  }
  if (j === 0) reverseArray(nums, 0, N - 1);
  else {
    let flagNum = nums[j - 1];
    // 在j 到 N- 1 中找到flagNum的位置
    for (let i = N - 1; i >= j; i--) {
      if (flagNum < nums[i]) {
        swapNum(nums, i, j - 1);
        break;
      }
    }
    // 反转
    reverseArray(nums, j, N - 1);
  }
  return nums;
  function reverseArray(nums, start, end) {
    let i = start, j = end;
    while (i < j) {
      swapNum(nums, i, j);
      i++;
      j--;
    }
  }

  function swapNum(nums, i, j) {
    let tempNum = nums[i];
    nums[i] = nums[j];
    nums[j] = tempNum;
  }

};
nextPermutation([3,5,5,3,2,1])