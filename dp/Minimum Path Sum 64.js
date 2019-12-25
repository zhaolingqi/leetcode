/**
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。
 */
/**
 * 示例:

输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length
    var n = grid[0].length
    if(m < 1 || n < 1) return null
    var f = new Array(m)
    for(let i = 0; i < m; i++) {
        f[i] = new Array(n)
    }
    f[0][0] = grid[0][0]
    for(let i = 1; i < n; i++) {
        f[0][i] = grid[0][i] + f[0][i - 1]
    }
    for(let i = 1; i < m; i++) {
        f[i][0] = grid[i][0] + f[i - 1][0]
    }
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            f[i][j] = f[i - 1][j] + grid[i][j] > f[i][j - 1] + grid[i][j] ? f[i][j - 1] + grid[i][j] : f[i - 1][j] + grid[i][j]
        }
    }
    return f[m - 1][n - 1]
};
minPathSum([[1,3,1]])