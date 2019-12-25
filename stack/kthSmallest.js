/**
 * 有序矩阵中第K小的元素
给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第k小的元素。
请注意，它是排序后的第k小元素，而不是第k个元素。

示例:

matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8,

返回 13。
说明:
你可以假设 k 的值永远是有效的, 1 ≤ k ≤ n2 。
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {

    let arr = []
    let N = matrix.length
    if (k === 1) return matrix[0][0]
    if (k === N * N) return matrix[N - 1][N - 1]
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            arr[i * N + j] = matrix[i][j]
        }
    }
    let maxStack = arr.slice(0, k)
    for (let i = k; i >= 1; i--) {
        maxStack[i] = maxStack[i - 1]
    }
    for (let j = parseInt(k / 2); j >= 1; j--)
        sink(j)

    for (let i = k; i < N * N; i++) {
        if (arr[i] >= maxStack[1]) continue
        else {
            maxStack[1] = arr[i]
            sink(1)
        }
    }
    return maxStack[1]

    function sink(i) {
        while (2 * i <= k) {
            let j = 2 * i
            if (j < k && maxStack[j] < maxStack[j + 1]) j++
            if (maxStack[i] > maxStack[j]) break
            exch(i, j)
            i = j
        }
    }
    function exch(i, j) {
        let temp = maxStack[i]
        maxStack[i] = maxStack[j]
        maxStack[j] = temp
    }

};
let matrix = [
    [1, 5, 9],
    [10, 11, 1],
    [12, 3, 3]
], k = 8
kthSmallest(matrix, k)
// 维护一个包含k个数的最小堆

var kthSmallest = function (matrix, k) {
    let n = matrix.length;
    let lo = matrix[0][0];
    let hi = matrix[n - 1][n - 1];
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2)
        let cnt = countLess(matrix, mid);
        if (cnt < k) { // kth in the right half
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}
function countLess(matrix, mid) {
    let n = matrix.length;
    let cnt = 0;
    let i = n - 1;
    let j = 0;
    while (i >= 0 && j < n) {
        // search up from bottom of the column
        // then go to next column bottom
        if (matrix[i][j] <= mid) {
            cnt += i + 1;
            j += 1;
        } else {
            i -= 1;
        }
    }
    return cnt;
}