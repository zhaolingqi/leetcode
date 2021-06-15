/**
 * 给你一个整数数组 bloomDay，以及两个整数 m 和 k 。

现需要制作 m 束花。制作花束时，需要使用花园中 相邻的 k 朵花 。

花园中有 n 朵花，第 i 朵花会在 bloomDay[i] 时盛开，恰好 可以用于 一束 花中。

请你返回从花园中摘 m 束花需要等待的最少的天数。如果不能摘到 m 束花则返回 -1 。

 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-number-of-days-to-make-m-bouquets
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  let num = m * k;
  let len = bloomDay.length;
  if (bloomDay.length < num) return -1;
  let max = Math.max(...bloomDay);
  let min = Math.min(...bloomDay);
  let mid = 0;
  while(min < max) {
    mid = Math.floor((max + min) / 2);
    if(canMake(bloomDay, m, k, mid)) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }
  return min;

  function canMake(bloomDay, m, k, days) {
    let tempNum = 0;
    let tempLen = 0;
    for(let i = 0; i < bloomDay.length; i++) {
      if(bloomDay[i] <= days) {
        tempLen ++;
        if(tempLen === k) {
          tempNum++;
          tempLen = 0;
        }
      } else {
        tempLen = 0;
      }
    }
    return tempNum >= m;
  }

};
console.log(minDays([7,7,7,7,12,7,7], 2, 3));