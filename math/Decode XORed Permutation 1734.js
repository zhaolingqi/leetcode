/**
 * 给你一个整数数组 perm ，它是前 n 个正整数的排列，且 n 是个 奇数 。

它被加密成另一个长度为 n - 1 的整数数组 encoded ，满足 encoded[i] = perm[i] XOR perm[i + 1] 。比方说，如果 perm = [1,3,2] ，那么 encoded = [2,1] 。

给你 encoded 数组，请你返回原始数组 perm 。题目保证答案存在且唯一。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/decode-xored-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function (encoded) {
  let len = encoded.length;
  const n = len + 1;
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total ^= i;
  }
  let min = 0;
  let temp = 0;
  for(let i = 0; i < len; i++) {
    temp ^= encoded[i];
    min ^= temp;
  }
  let perm = [];
  perm[0] = min ^ total;
  for(let i = 0; i < len; i++) {
    perm.push(encoded[i] ^ perm[i]);
  }
  return perm;
};