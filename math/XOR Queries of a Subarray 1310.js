/**
有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。

对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。

并返回一个包含给定查询 queries 所有结果的数组。

 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/xor-queries-of-a-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
  let res = [];
  queries.forEach(element => {
    const start = element[0];
    const end = element[1];
    let val = arr[start];
    for(let i = start + 1; i <= end; i++) {
      val ^= arr[i];
    }
    res.push(val);
  });
  return res;
};
xorQueries([4,8,2,10], [[2,3],[1,3],[0,0],[0,3]])