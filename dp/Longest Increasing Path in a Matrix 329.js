/**
 * 给定一个整数矩阵，找出最长递增路径的长度。

对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。

示例 1:

输入: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
输出: 4 
解释: 最长递增路径为 [1, 2, 6, 9]。
示例 2:

输入: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
输出: 4 
解释: 最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。

 */
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    let M = matrix.length
    if (M < 1) return 0
    let N = matrix[0].length
    let dx = [-1, 0, 1, 0]
    let dy = [0, -1, 0, 1]
    let cache = new Array(M)
    let res = 0
    for (let i = 0; i < M; i++) {
        cache[i] = new Array(N).fill(0)
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            res = Math.max(res, dfs(i, j, cache))
        }
    }
    return res

    function dfs(i, j, cache) {
        if (cache[i][j] !== 0) return cache[i][j]
        for (let k = 0; k < 4; k++) {
            let x = i + dx[k]
            let y = j + dy[k]
            if (x >= 0 && x < M && y >= 0 && y < N && matrix[x][y] > matrix[i][j]) {
                cache[i][j] = Math.max(cache[i][j], dfs(x, y, cache))
            }
        }
        return ++cache[i][j]
    }
};

longestIncreasingPath([[7, 8, 9], [9, 7, 6], [7, 2, 3]])