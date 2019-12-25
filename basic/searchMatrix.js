/**
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。 
*/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let M = matrix.length
    if(M < 1) return false
    let N = matrix[0].length
    let i = 0, j = N - 1
    while(i < M && j >= 0) {
        if(matrix[i][j] < target) i++
        else if(matrix[i][j] > target) j--
        else return true
    }
    return false
};