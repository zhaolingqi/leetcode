/**
 * 给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

不占用额外内存空间能否做到？
 */

 /**
  * 第i行变成第N-i列
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */ 
var rotate = function(matrix) {
    let N = matrix[0].length
    if(N < 1) return
    let tempArr = []
    for(let i = 0; i < N; i++) {
        tempArr[i] = matrix[i].slice()
    }
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            matrix[j][N - 1 - i] = tempArr[i][j]
        }
    }

};
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)