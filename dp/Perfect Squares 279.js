/**
 * 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

示例 1:

输入: n = 12
输出: 3 
解释: 12 = 4 + 4 + 4.
示例 2:

输入: n = 13
输出: 2
解释: 13 = 4 + 9.
 */

 /**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = new Array(n + 1)

    for(let i = 0; i <= n; i ++) {
        dp[i] = i
    }
    
    for(let i = 2; i <= n; i ++) {
        for(let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j*j] + 1)
        }
    }
    return dp[n]
};
numSquares(12)