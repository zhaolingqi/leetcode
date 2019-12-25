/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。
 */
/**
 * 示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
      if(n <= 2 && n >= 0) return n
      let f = new Array(n + 1)
      f[0] = 0
      f[1] = 1
      f[2] = 2
      for(let i = 3; i <= n; i++) {
          f[i] = f[i - 1] + f[i - 2]
      }
      console.log(f[n])
      return f[n]
};
climbStairs(20)