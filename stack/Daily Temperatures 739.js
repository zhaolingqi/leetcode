/**
 * 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。

 */
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let N = T.length;
    let dp = new Array(N);
    let res = [];
    dp[N - 1] = 0
    for(let i = N - 2; i >= 0; i--) {
        let temp = i + 1;
        while(temp && T[i] >= T[temp]) {
            temp = dp[temp];
        }
        dp[i] = temp;
    }
    for(let i = 0; i < N; i++) {
        res[i] = dp[i] ? dp[i] - i : 0;
    }
    console.log(dp, res)
    return res
};
dailyTemperatures([89,62,70,58,47,47,46,76,100,70])