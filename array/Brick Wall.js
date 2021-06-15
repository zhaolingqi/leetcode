/**
 * 你的面前有一堵矩形的、由 n 行砖块组成的砖墙。这些砖块高度相同（也就是一个单位高）但是宽度不同。每一行砖块的宽度之和应该相等。

你现在要画一条 自顶向下 的、穿过 最少 砖块的垂线。如果你画的线只是从砖块的边缘经过，就不算穿过这块砖。你不能沿着墙的两个垂直边缘之一画线，这样显然是没有穿过一块砖的。

给你一个二维数组 wall ，该数组包含这堵墙的相关信息。其中，wall[i] 是一个代表从左至右每块砖的宽度的数组。你需要找出怎样画才能使这条线 穿过的砖块数量最少 ，并且返回 穿过的砖块数量 。
*/
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  let sum = wall[0].reduce((pre, cur) => {
    return pre += cur;
  }, 0);
  let map = new Map();
  let n = wall.length;
  let res = 0;
  for(let i = 0; i < n; i++) {
    let len = wall[i].length;
    let tempSum = 0;
    for(let j = 0; j < len - 1; j++) {
      tempSum += wall[i][j];
      if(map.has(tempSum)) {
        map.set(tempSum, map.get(tempSum) + 1);
      } else {
        map.set(tempSum, 1);
      }
    }
  }
  let mapIter = map.values();
  let next = mapIter.next();
  while(next.value) {
    let val = next.value;
    res = Math.max(val, res);
    next = mapIter.next();
  }
  console.log(n - res)
};

let wall = 
[[100000000],[100000000],[100000000]];
leastBricks(wall)