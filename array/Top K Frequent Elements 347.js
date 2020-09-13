/**
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map();
  let res = [];
  for(const num of nums) {
    if(map.has(num)) {
      let value = map.get(num);
      map.set(num, value + 1);
    } else {
      map.set(num, 1);
    }
  }
  let arr = [];
  let iter = map.entries();
  let next = iter.next(); 
  while(next.value) {
    arr.push(next.value);
    next = iter.next();
  }
  arr = arr.sort((a, b) => {
    return b[1] - a[1]
  })
  for(let i = 0; i < k; i++) {
    res.push(arr[i][0]);
  }
  console.log(res);
};
let nums = [1,1,1,2,2,3], k = 2;
topKFrequent(nums, k);