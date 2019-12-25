/**
 * 给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

示例 1:

输入:
11110
11010
11000
00000

输出: 1
示例 2:

输入:
11000
11000
00100
00011

输出: 3

 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let M = grid.length
    let N = grid[0].length
    let visted = new Array(M)
    let islandNums = 0
    for (let i = 0; i < M; i++) {
        visted[i] = new Array(N).fill(0)
    }
    let dx = [-1, 0, 1, 0]
    let dy = [0, -1, 0, 1]
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if(grid[i][j] === '1' && visted[i][j] === 0) {
                dfs(i, j)
                islandNums ++
            }
        }
    }
    console.log(islandNums)

    function dfs(i, j) {
        if(grid[i][j] === '0') return
        visted[i][j] = 1
        for (let k = 0; k < 4; k++) {
            let x = i + dx[k]
            let y = j + dy[k]
            if (x >= 0 && x < M && y >= 0 && y < N && visted[x][y] === 0) {
                dfs(x, y)
            }
        }
    }
};
numIslands([["1","1","0","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","1"]])