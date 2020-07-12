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
  // const M = dungeon.length;
  // if(M < 1) return 0;
  // const N = dungeon[0].length;
  // if(N === 1 && M === 1) {
  //     if(dungeon[0][0] >= 0) return 1;
  //     return (-dungeon[0][0]) + 1
  // }
  // let dp = []
  // let temp = [];
  // for(let i = 0; i < M; i++) {
  //   dp[i] = [];
  //   temp[i] = []
  // }
  // dp[0][0] = dungeon[0][0];
  // temp[0][0] = dp[0][0];
  // for(let i = 1; i < M; i++) {
  //   temp[i][0] = temp[i - 1][0] + dungeon[i][0];
  //   if(dungeon[i][0] >= 0) dp[i][0] = dp[i - 1][0];
  //   else {
  //     dp[i][0] = Math.min(dp[i - 1][0], temp[i][0]);
  //   }
  // }
  // for(let j = 1; j < N; j++) {
  //   temp[0][j] = temp[0][j - 1] + dungeon[0][j];
  //   dp[0][j] = dungeon[0][j] >= 0 ? dp[0][j - 1] : Math.min(dp[0][j - 1], temp[0][j]);
  // }
  // for(let i = 1; i < M; i++) {
  //   for(let j = 1; j < N; j++) {
  //     if(dungeon[i][j] >= 0) {
  //       if(dp[i - 1][j] >=  dp[i][j - 1]) {
  //         dp[i][j] = dp[i - 1][j];
  //         temp[i][j] = temp[i - 1][j] + dungeon[i][j];
  //       } else {
  //         dp[i][j] = dp[i][j - 1];
  //         temp[i][j] = temp[i][j - 1] + dungeon[i][j];
  //       }
  //     }
  //     else {

  //       let temp1 = Math.min(temp[i - 1][j] + dungeon[i][j], dp[i - 1][j]);
  //       let temp2 = Math.min(temp[i][j - 1] + dungeon[i][j], dp[i][j - 1]);
  //       dp[i][j] = Math.max(temp1, temp2);
  //       if(temp1 >= temp2) {
  //         dp[i][j] = temp1;
  //         temp[i][j] = temp[i - 1][j] + dungeon[i][j];
  //       } else {
  //         dp[i][j] = temp2;
  //         temp[i][j] = temp[i][j - 1] + dungeon[i][j];
  //       }
  //     }
  //   }
  // }

  // console.log(dp, temp);
  // if(dp[M - 1][N - 1] >= 0) return 1;
  // return Math.abs(dp[M - 1][N - 1]) + 1;

  let N = dungeon.length;
  let M = dungeon[0].length;
  let dp = [];
  for(let i = 0; i <= N; i++) {
    dp[i] = new Array(M + 1).fill(Number.MAX_SAFE_INTEGER);
  }
  dp[N][M - 1] = 1;
  dp[N - 1][M] = 1;
  for (let i = N - 1; i >= 0; --i) {
    for (let j = M - 1; j >= 0; --j) {
        let minn = Math.min(dp[i + 1][j], dp[i][j + 1]);
        dp[i][j] = Math.max(minn - dungeon[i][j], 1);
    }
  }
  return dp[0][0];

};
const arr =[[-10]];
console.log(calculateMinimumHP(arr));