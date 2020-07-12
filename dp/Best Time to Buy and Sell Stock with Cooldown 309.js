/**
 * 给定一个整数数组，其中第 i 个元素代表了第 i 天的股票价格 。​

设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:

你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
 */
/**
 * dp[i][0] 持有股票 dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
 * dp[i][1] 未持有股票，且处于冻结期（第i+1天不能买入） dp[i][1] = dp[i - 1] + prices[i]
 * dp[i][2] 未持有股票，且不处于冻结期 dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let N = prices.length;
  if( N < 1) return 0;
  let dp = new Array(N);
  for(let i = 0; i < N; i++) {
    dp[i] = [];
  }
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  dp[0][2] = 0;
  for(let i = 1; i < N; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    dp[i][1] = dp[i - 1][0] + prices[i];
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
  }
  return Math.max(dp[N - 1][1], dp[N - 1][2]);
};