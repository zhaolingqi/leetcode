/**
 * 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素.
 * 请注意，它是排序后的第 k 小元素，而不是第 k 个不同的元素。
 */
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let N = matrix[0];
  let left = matrix[0][0];
  let right = matrix[N - 1][N - 1];
  while(left < right) {
    let mid = Math.floor((left + right) / 2);
    if (check(matrix, mid, k, n)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
  function check(matrix, k, N, mid) {
    let i = n - 1;
    let j = 0;
    let num = 0;
    while (i >= 0 && j < n) {
        if (matrix[i][j] <= mid) {
            num += i + 1;
            j++;
        } else {
            i--;
        }
    }
    return num >= k;
  }
};
