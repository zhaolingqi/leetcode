/**
 * 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let N = matrix.length
    let M = matrix[0].length
    let res = -1
    let dp = new Array(N)
    
    for (let i = 0; i < N; i++) {
        dp[i] = new Array(M)
    }
    for (let i = 0; i < N; i++) {
        dp[i][0] = matrix[i][0] === '1' ? 1 : 0
    }
    for(let i = 0; i < M; i++) {
        dp[0][i] = matrix[0][i] === '1' ? 1 : 0
    }

    for (let i = 1; i < N; i++) {
        for (let j = 1; j < M; j++) {
            if(matrix[i][j] === '0') dp[i][j] = 0
            else {
                if(dp[i - 1][ j - 1] === 0) dp[i][j] = 1
                else {
                    let length = Math.sqrt(dp[i - 1][j - 1])
                    let row = 0
                    let column = 0
                    for(let k = i - 1; k >= i - length; k--) {
                        if(matrix[k][j] === '0') break
                        row++
                    }
                    for(let k = j - 1; k >= j - length; k--) {
                        if(matrix[i][k] === '0') break
                        column++
                    }
                    dp[i][j] = (Math.min(row, column) + 1) * (Math.min(row, column) + 1)
                }
            }
        }
    }
    for(let i = 0; i < N; i++) {
        let temp = Math.max(...dp[i])
        res = res > temp ? res : temp 
    }
    return res
};
let arr = [["0","1"]]
maximalSquare(arr)