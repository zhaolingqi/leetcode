/**
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let column = new Map(); // 判断列上有没有别的皇后
  let diagonalLeft = new Map(); // 判断从左上到右下的对角线上有没有别的皇后
  let diagonalRight = new Map(); // 判断从右上到左下的对角线上有没有别的皇后
  let queens = new Array(n).fill(-1);
  let res = [];
  backTrack(n, 0, queens, column, diagonalLeft, diagonalRight);
  console.log(res);
  /**
   * 
   * @param {number} n 
   * @param {number} row 
   * @param {Array} queens 
   * @param {Map} column 
   * @param {Map} diagonalLeft 
   * @param {Map} diagonalRight 
   */
  function backTrack(n, row, queens, column, diagonalLeft, diagonalRight) {
    if (row === n) {
      // 根据queens生成皇后位置摆放的图
      generateMap(queens, n);
    } else {
      for(let i = 0; i < n; i++) {
        if(column.has(i)) {
          continue;
        }
        if(diagonalLeft.has(i - row)) {
          continue;
        }
        if(diagonalRight.has(i + row)) {
          continue;
        }
        column.set(i, 1);
        diagonalRight.set(i + row);
        diagonalLeft.set(i - row);
        queens[row] = i;
        backTrack(n, row + 1, queens, column, diagonalLeft, diagonalRight);
        queens[row] = -1;
        column.delete(i);
        diagonalLeft.delete(i - row);
        diagonalRight.delete(i + row);
      }
    }
  }
  function generateMap(queens, n) {
    let arr = [];
    for(let i = 0; i < n; i++) {
      let temp = new Array(n).fill('.');
      temp[queens[i]] = 'Q';
      arr.push(temp.join(""));
    }
    res.push(arr);
  }
};
solveNQueens(4);