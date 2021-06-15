/**
 * 在一个小城市里，有 m 个房子排成一排，你需要给每个房子涂上 n 种颜色之一（颜色编号为 1 到 n ）。有的房子去年夏天已经涂过颜色了，所以这些房子不需要被重新涂色。

我们将连续相同颜色尽可能多的房子称为一个街区。（比方说 houses = [1,2,2,3,3,2,1,1] ，它包含 5 个街区  [{1}, {2,2}, {3,3}, {2}, {1,1}] 。）

给你一个数组 houses ，一个 m * n 的矩阵 cost 和一个整数 target ，其中：

houses[i]：是第 i 个房子的颜色，0 表示这个房子还没有被涂色。
cost[i][j]：是将第 i 个房子涂成颜色 j+1 的花费。
请你返回房子涂色方案的最小总花费，使得每个房子都被涂色后，恰好组成 target 个街区。如果没有可用的涂色方案，请返回 -1 。
 */
/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function(houses, cost, m, n, target) {
  let blocks = [];
  let blockNum = 0;
  let start = 0;
  while(houses[start] === 0) {
    start++;
  }
  let preColor = houses[start];
  for (let i = start + 1; i < m; i++) {
    if(houses[i] !== preColor && houses[i] !== 0) {
      preColor = houses[i];
      blockNum++;
    }
  }
  if(start <= m - 1) blockNum++;
  if(blockNum > target) return -1;
};
minCost([0,1,0,1,0], [[1,1,1],[1,1,1],[1,1,1],[1,1,1]], 5, 3, 3)