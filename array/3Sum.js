/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let N = nums.length;
  let res = [];
  for(let i = 0; i < N; i++) {
    if(nums[i] === nums[i - 1]) continue;
    let j = i + 1;
    let k = N - 1;
    let target = 0 - nums[i];
    while(j < k){
      let remain = target - nums[j] - nums[k];
      if(remain === 0) {
        let temp = [nums[i], nums[j], nums[k]];
        if(isUnique(res, temp)) res.push(temp);
        j ++;
        k --;
      } else if(remain < 0) {
        k --;
      } else {
        j ++;
      }
    }
  }
  console.log(res);
  return res;

  function isUnique(arr, element) {
    let N = element.length;
    for(const value of arr) {
      let flag = true
      for(let i = 0; i < N; i++) {
        if(value[i] !== element[i]) {
          flag = false;
          break;
        }
      }
      if(flag) return false;
    }
    return true
  }

};

const nums = [-2,0,0,2,2];
threeSum(nums);