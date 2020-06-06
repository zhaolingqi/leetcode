/**
 * 给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
    let pre = 0
    let count = 0
    let map = new Map()
    map.set(0, 1)
    for(const num of A) {
        pre += num
        let key = (pre % K + K) % K
        if(map.has(key)) count += map.get(key)
        else map.set(key, 1);
    }
    return count
};
console.log(-6 % 5)