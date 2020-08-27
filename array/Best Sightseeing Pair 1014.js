/**
 * 给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。
 * 一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。
 * 返回一对观光景点能取得的最高分。

 

示例：

输入：[8,1,5,2,6]
输出：11
解释：i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11

 */
/**
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
  var maxScoreSightseeingPair = function(A) {
    let N = A.length;
    if(N <= 1) return 0;
    let max = A[0] + 0;
    let res = Number.NEGATIVE_INFINITY;
    for(let i = 1; i < N; i++) {
      res = Math.max(A[i] - i + max, res);
      max = Math.max(max, A[i] + i);
    }
    return res;
  };
};