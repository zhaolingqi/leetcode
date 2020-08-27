/**
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
 * 两个相邻元素间的距离为 1 。
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

var updateMatrix = function(matrix) {
    let M = matrix.length
    let N = matrix[0].length
    let dx = [-1, 0, 1, 0]
    let dy = [0, -1, 0, 1]
    let res = []
    for(let i = 0; i < M; i++) {
        res[i] = []
        for(let j = 0; j < N; j++) {
            if(matrix[i][j] === 0) res[i][j] = 0
            else res[i][j] = Number.POSITIVE_INFINITY 
        }
    }

    for(let i = 0; i < M; i++) {
        for(let j = 0; j < N; j++) {
            if(i - 1 >= 0) res[i][j] = Math.min(res[i][j], res[i - 1][j] + 1);
            if (j - 1 >= 0) {
                res[i][j] = Math.min(res[i][j], res[i][j - 1] + 1);
            }
        }
    }

    for(let i = M - 1; i >= 0; i--) {
        for(let j = N - 1; j >=0 ; j--) {
            if(i + 1 < M) res[i][j] = Math.min(res[i][j], res[i + 1][j] + 1);
            if (j + 1 < N) {
                res[i][j] = Math.min(res[i][j], res[i][j + 1] + 1);
            }
        }
    }
    console.log (res)

};
// let matrix = [[1,0,1,1,0,0,1,0,0,1],[0,1,1,0,1,0,1,0,1,1],[0,0,1,0,1,0,0,1,0,0],[1,0,1,0,1,1,1,1,1,1],[0,1,0,1,1,0,0,0,0,1],[0,0,1,0,1,1,1,0,1,0],[0,1,0,1,0,1,0,0,1,1],[1,0,0,0,1,1,1,1,0,1],[1,1,1,1,1,1,1,0,1,0],[1,1,1,1,0,1,0,0,1,1]]

let matrix = [[0,1,0,1,1],[1,1,0,0,1],[0,0,0,1,0],[1,0,1,1,1],[1,0,0,0,1]]
updateMatrix(matrix)
// 