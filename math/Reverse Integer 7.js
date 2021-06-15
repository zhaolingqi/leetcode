/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let flag = x >= 0 ? true : false;
  x = Math.abs(x);
  let res = 0;
  while (parseInt(x / 10)) {
    let num = x % 10;
    res = res * 10 + num;
    x = parseInt(x / 10);
  }
  res = res * 10 + x;
  if (flag) {
    
    return res <= Math.pow(2, 31) - 1 ? res : 0;
  } else {
    return res <= Math.pow(2, 31) ? - res : 0;
  };
};
console.log(reverse(-1593256262))