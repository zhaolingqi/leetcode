/**
 * 给定一个整数数组 nums，按要求返回一个新数组 counts。
 * 数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
  const N = nums.length;
  if(N < 1) return [];
  let counts = new Array(N).fill(0);
  let indexs = [];
  for(let i = 0; i < N; i++) {
    indexs[i] = i; // 索引数组
  }
  let temp = [];
  let start = 0;
  let end = N - 1;
  subMerge(nums, counts, start, end);
  return counts;
  
  function subMerge(nums, counts, start, end) {
    if(start === end) return;
    let mid = (start + end) >> 1;
    subMerge(nums, counts, start, mid);
    subMerge(nums, counts, mid + 1, end);
    if(nums[indexs[mid]] <= nums[indexs[mid + 1]]) return;
    merge(nums, counts, start, mid, end);
  }
  function merge(nums, counts, start, mid, end) {
    for(let i = 0; i < N; i++) {
      temp[i] = indexs[i];
    }
    let i = start;
    let j = mid + 1;
    for(let k = start; k <= end; k++) {
      if(i > mid) {
        indexs[k] = temp[j];
        j++
      } else if(j > end) {
        indexs[k] = temp[i];
        i++;
        counts[indexs[k]] += (end - mid);
      } else if(nums[temp[i]] > nums[temp[j]]) {
        indexs[k] = temp[j];
        j++;
      } else {
        indexs[k] = temp[i];
        i++;
        counts[indexs[k]] += (j - mid - 1);
      }
    }
  }
};

countSmaller([5,2,6,1]);