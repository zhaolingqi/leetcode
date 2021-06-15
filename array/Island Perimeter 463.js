/**
 * 给定一个包含 0 和 1 的二维网格地图，其中 1 表示陆地 0 表示水域。

网格中的格子水平和垂直方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let N = grid.length;
  if(N < 1) return 0;
  let M = grid[0].length;
  let res = 0;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 1) {
        for (k = 0; k < 4; k++) {
          let x = i + dx[k];
          let y = j + dy[k];
          if(x >= 0 && x < N && y >=0 && y < M && grid[x][y] === 1) {
            continue;
          }
          res++;
        }
      }
    }
  }
  return res;
};