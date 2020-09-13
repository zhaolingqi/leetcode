/**
 * 给定一个表示分数的非负整数数组。 玩家 1 从数组任意一端拿取一个分数，随后玩家 2 继续从剩余数组任意一端拿取分数，
 * 然后玩家 1 拿，…… 。每次一个玩家只能拿取一个分数，分数被拿取之后不再可取。直到没有剩余分数可取时游戏结束。最终获得分数总和最多的玩家获胜。
 * 给定一个表示分数的数组，预测玩家1是否会成为赢家。你可以假设每个玩家的玩法都会使他的分数最大化。
 */
/**
 * dp[i][j]表示当数组剩下部分为i到j时，当前玩家与另一个玩家的分数之差的最大值
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  let N = nums.length;
  if(N <= 1) return true;
  let dp = [];
  for(let i = 0; i < N; i++) {
    dp[i] = new Array(N).fill(0);
    dp[i][i] = nums[i];
  }
  for(let i = N - 2; i >= 0; i--) {
    for(let j = i + 1; j < N; j++) {
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
    }
  }
  console.log(dp);
  return dp[0][N - 1] >= 0;
};
PredictTheWinner([1,5,2])