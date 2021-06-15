/**
 * 有一个长度为 arrLen 的数组，开始有一个指针在索引 0 处。

每一步操作中，你可以将指针向左或向右移动 1 步，或者停在原地（指针不能被移动到数组范围外）。

给你两个整数 steps 和 arrLen ，请你计算并返回：在恰好执行 steps 次操作以后，指针仍然指向索引 0 处的方案数。

由于答案可能会很大，请返回方案数 模 10^9 + 7 后的结果。
*/
/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  let dp = new Array(steps + 1)
  const MAX_VALUE = Math.pow(10, 9) + 7;
  for(let i = 0; i <= steps; i++) {
    dp[i] = []
  };
  let col = Math.min(steps, arrLen);
  dp[0][0] = 1;
  for(let i = 1; i < col; i++) {
    dp[0][i] = 0;
  }
  for(let i = 1; i <= steps; i++) {
    for(let j = 0; j < col; j++) {
      if(j === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j + 1];
      } else if(j === col - 1) {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1] + dp[i - 1][j + 1];
      }
      if(dp[i][j] > MAX_VALUE) dp[i][j] = dp[i][j] % MAX_VALUE
    }
  }
  console.log(dp)
  return dp[steps][0];
};
numWays(3, 3)