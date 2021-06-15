/**
 * 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
 * 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 */
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let map = new Map();
  let set = new Set();
  for(const val of arr) {
    if(map.has(val)) {
      map.set(val, map.get(val) + 1);
    } else {
      map.set(val, 1);
    }
  }
  let mapIter = map.values();
  let value = mapIter.next().value;
  while(value) {
    if(set.has(value)) return false;
    set.add(value);
    value = mapIter.next().value;
  }
  return true
};
uniqueOccurrences([1,2,2,1,1,3])