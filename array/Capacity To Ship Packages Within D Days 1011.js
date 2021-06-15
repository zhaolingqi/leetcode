/**
 * 传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。

传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。

返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。

 */

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, D) {
  const N = weights.length;
  let max = Math.max(...weights);
  let day = 0;
  while (true) {
    let temp = 0;
    day = 0;
    for (let i = 0; i < N; i++) {
      temp += weights[i];
      if (temp > max) {
        temp = 0;
        i--;
        day++;
      }
    }
    day++;
    if (day <= D) break;
    else max++;
  }
  console.log(max);
};


shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5)
