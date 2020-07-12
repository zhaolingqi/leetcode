/**
 * 一些恶魔抓住了公主（P）并将她关在了地下城的右下角。地下城是由 M x N 个房间组成的二维网格。我们英勇的骑士（K）最初被安置在左上角的房间里，他必须穿过地下城并通过对抗恶魔来拯救公主。

骑士的初始健康点数为一个正整数。如果他的健康点数在某一时刻降至 0 或以下，他会立即死亡。

有些房间由恶魔守卫，因此骑士在进入这些房间时会失去健康点数（若房间里的值为负整数，则表示骑士将损失健康点数）；其他房间要么是空的（房间里的值为 0），要么包含增加骑士健康点数的魔法球（若房间里的值为正整数，则表示骑士将增加健康点数）。

为了尽快到达公主，骑士决定每次只向右或向下移动一步。

 

编写一个函数来计算确保骑士能够拯救到公主所需的最低初始健康点数。
 */
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const M = dungeon.length;
  if(M < 1) return 0;
  const N = dungeon[0].length;
  let dp = []
  let temp = []
  for(let i = 0; i < M; i++) {
    dp[i] = [];
    temp[i] = []
  }
  dp[0][0] = dungeon[0][0];
  temp[0][0] = dp[0][0];
  for(let i = 1; i < M; i++) {
    temp[i][0] = temp[i - 1][0] + dungeon[i][0];
    if(dungeon[i][0] >= 0) dp[i][0] = dp[i - 1][0];
    else {
      dp[i][0] = Math.min(dp[i - 1][0], temp[i][0]);
    }
  }
  for(let j = 1; j < N; j++) {
    temp[0][j] = temp[0][j - 1] + dungeon[0][j];
    dp[0][j] = dungeon[0][j] >= 0 ? dp[0][j - 1] : Math.min(dp[0][j - 1], temp[0][j]);
  }
  for(let i = 1; i < M; i++) {
    for(let j = 1; j < N; j++) {
      temp[i][j] = Math.max(temp[i - 1][j], temp[i][j - 1]) + dungeon[i][j];
      if(dungeon[i][j] >= 0) dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      else {
        if(temp[i][j] < dp[i - 1][j] && temp[i][j] < dp[i][j - 1]) {
          dp[i][j] = temp[i][j]
        } else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  let temp1, temp2;
  temp1 = Math.min(temp[M - 2][N - 1] + dungeon[M - 1][N - 1], dp[M - 2][N - 1]);
  temp2 = Math.min(temp[M - 1][N - 2] + dungeon[M - 1][N - 1], dp[M - 1][N - 2]);
  // console.log(dp, temp);
  // console.log(temp1);
  // console.log(temp2);
  const res = Math.max(temp1, temp2);
  if(res > 0) return 1;
  return (-res) + 1;
};
const arr =[[-2,-3,3],[-5,-10,1],[10,30,-5]];
calculateMinimumHP(arr);