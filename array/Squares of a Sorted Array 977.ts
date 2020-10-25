/**
 * 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 */
function sortedSquares(A: number[]): number[] {
  return A.map((val) => val * val).sort();
};