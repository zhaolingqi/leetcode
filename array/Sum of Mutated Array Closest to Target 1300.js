/**
 * 给你一个整数数组 arr 和一个目标值 target ，请你返回一个整数 value ，使得将数组中所有大于 value 的值变成 value 后，数组的和最接近  target （最接近表示两者之差的绝对值最小）。
 * 如果有多种使得和最接近 target 的方案，请你返回这些整数中的最小值。
 * 请注意，答案不一定是 arr 中的数字。
 */
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
let findBestValue = function (arr, target) {
  let N = arr.length;
  let tar = Math.round(target / N);
  arr.sort((a, b) => a - b);
  if (arr[0] >= tar) {
    return tar;
  }
  if (arr[N - 1] <= tar) {
    return arr[N - 1];
  }
  let sum = [];
  sum[0] = arr[0];
  for (let i = 1; i < N; i++) {
    sum[i] = sum[i - 1] + arr[i];
  }
  let index = findMinIndex(arr, tar);
  let remain = target - sum[index];
  let temp = Math.floor(remain / (N - 1 - index));
  if((remain - temp * (N - 1 - index)) > (N - 1 - index) / 2) temp++;
  while(arr[index + 1] < temp) {
    index++;
    remain = target - sum[index];
    temp = Math.floor(remain / (N - 1 - index));
    if((remain - temp * (N - 1 - index)) > (N - 1 - index) / 2) temp++;
  }
  if(temp > arr[N - 1]) return arr[N - 1];
  return temp;

  function findMinIndex(arr, tar) {
    let N = arr.length;
    // 在排好序的arr中找到大于tar的数的最小位置；
    let start = 0;
    let end = N - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] < tar) {
        start = mid + 1;
      } else if (arr[mid] > tar) {
        end = mid - 1;
      } else {
        return mid;
      }
    }
    return Math.min(start, end);
  }
};

let res = findBestValue([1,2,23,24,34,36], 110);
console.log(res);

