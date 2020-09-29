/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
// var numIslands = function (grid) {
//     let N = grid.length
//     if(N < 1) return 0
//     let M = grid[0].length
//     let flags = new Array(N)
//     let dx = [0, -1, 0, 1]
//     let dy = [-1, 0, 1, 0]
//     for(let i = 0; i < N; i++) {
//         flags[i] = new Array(M).fill(true)
//     }
//     let count = 0
//     for(let i = 0; i < N; i++) {
//         for(let j = 0; j < M; j++) {
//             if(flags[i][j]){
//                 if(sub(grid, i, j)) {
//                     count++
//                 }
//             }
//         }
//     }
//     console.log(count)

//     function sub(grid, i, j) {
//         if(grid[i][j] === '0') return false
//         flags[i][j] = false
//         for(let k = 0; k < 4; k++) {
//             let x = i + dx[k]
//             let y = j + dy[k]
//             if(x >=0 && y >= 0 && x < N && y < M && flags[x][y] && grid[i][j] !== '0') {
//                 sub(grid, x, y)
//             }
//         }
//         return true
//     }
// };
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
var numIslands = function (grid) {
    let N = grid.length;
    let M = grid[0].length;
    let flags = new Array(N);
    for (let i = 0; i < N; i++) {
        flags[i] = new Array(M).fill(true);
    }
    let count = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (flags[i][j] && grid[i][j] === '1') {
                dfs(grid, i, j, flags);
                count++;
            }
        }
    }
    console.log(count);
    function dfs(grid, x, y, flags) {
        flags[x][y] = false;
        for (let i = 0; i < 4; i++) {
            let tempX = x + dx[i];
            let tempY = y + dy[i];
            if (tempX >= 0 && tempY >= 0 && tempX < N && tempY < M && flags[tempX][tempY] && grid[tempX][tempY] === '1') {
                dfs(grid, tempX, tempY, flags);
            }
        }
    }
};
let arr = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
]

numIslands(arr)