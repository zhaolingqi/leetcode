/**
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。

注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

 */
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let N = prices.length
    if(N <= 1) return 0
    let K = Math.min(k, parseInt(N/2))
    let f = new Array(N + 1)
    for(let i = 0; i <= N; i++) {
        f[i] = new Array(K + 1)
    }
    for(let i = 0; i <= N; i++) {
        f[i][0] = 0
    }
    for(let i = 0; i <= K; i++) {
        f[0][i] = 0
    }
    for(let k = 1; k <= K; k++) {
        let max = Number.NEGATIVE_INFINITY
        for(let i = 1; i <= N; i++) {
            max = Math.max(max, f[i - 1][k - 1] - prices[i - 1])
            f[i][k] = Math.max(f[i -1][k], prices[i - 1] + max)
        }
    }
    return f[N][K]
};
console.log(maxProfit(2, [2,4,1]))
