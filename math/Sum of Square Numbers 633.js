/**
 * 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  for(let i = 0; i * i <= c; i++) {
    const j = Math.sqrt(c - i * i);
    if(j === parseInt(j)) return true;
  }
  return false;
};