/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = new Array(numRows);
  for(let i = 0; i < numRows; i++) {
    res[i] = [];
  }
  res[0][0] = 1;
  if(numRows <= 1) return res;
  for(let i = 1; i < numRows; i++) {
    for(let j = 0; j <= i; j++) {
      if(j === 0) res[i][j] = res[i - 1][j];
      else if(j === i) res[i][j] = res[i - 1][j - 1];
      else {
        res[i][j] = res[i - 1][j] + res[i - 1][j - 1];
      }
    }
  }
  return res;
};
generate(5);