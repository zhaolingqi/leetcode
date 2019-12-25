/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
网格中的障碍物和空位置分别用 1 和 0 来表示。

说明：m 和 n 的值均不超过 100。

示例 1:

输入:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
输出: 2
解释:
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右

 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length
    var n = obstacleGrid[0].length
    var f = new Array(m)
    for(let i = 0; i < m; i++) {
        f[i] = new Array(n)
    }
    var flag = 0
    for(let i = 0; i < n; i++) {
        if(flag === 0) {
            if(obstacleGrid[0][i] === 1) {
                f[0][i] = 0
                flag = 1
            } else {
                f[0][i] = 1
            }
        } else f[0][i] = 0
    }
    flag = 0
    console.log(f)
    for(let i = 0; i < m; i++) {
        if(flag === 0) {
            if(obstacleGrid[i][0] === 1) {
                f[i][0] = 0
                flag = 1
            } else {
                f[i][0] = 1
            }
        } else {
            f[i][0] = 0
        }
    }
    console.log(f)
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if(obstacleGrid[i][j] === 1) {
                f[i][j] = 0
            } else {
                f[i][j] = f[i - 1][j] + f[i][j - 1]
            }
        }
    }
    return f[m - 1][n - 1]
};
console.log(uniquePathsWithObstacles([[0],[1]]))