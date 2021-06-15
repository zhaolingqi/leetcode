/**
 * 给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。
 * 换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。
 * 以数组形式返回答案。
 */
function smallerNumbersThanCurrent(nums: number[]): number[] {
  let res: Array<number> = [];
  const N = nums.length;
  for (let i = 0; i < N; i++) {
    let count: number = 0;
    for (let j = 0; j < N; j++) {
      if (j !== i) {
        if (nums[j] < nums[i]) count++;
      }
    }
    res[i] = count;
  }
  return res;
};