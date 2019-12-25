/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

示例 1:

输入: coins = [1, 2, 5], amount = 11
输出: 3 
解释: 11 = 5 + 5 + 1
示例 2:

输入: coins = [2], amount = 3
输出: -1
说明:
你可以认为每种硬币的数量是无限的。
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let N = coins.length
    let dp = new Array(amount + 1).fill(-1)
    dp[0] = 0
    coins.sort((a, b) => {return a - b})
    console.log(coins)
    for(let i = 1; i <= amount; i++) {
        let min = Number.POSITIVE_INFINITY
        for(let j = 0; j < N; j++) {
            if(i - coins[j] < 0) {
                break
            }
            if(dp[i - coins[j]] < 0) {
                continue
            }
            dp[i] = Math.min(min, dp[i - coins[j]] + 1)
            min = dp[i]
        }
    }
    console.log(dp[6249 - 83],dp[6249 - 186],dp[6249 - 408], dp[6249 - 419])
    return dp[amount]
};
coinChange([186,419,83,408], 6249)