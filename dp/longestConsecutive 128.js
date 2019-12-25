/**
 * 给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。

示例:

输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let N = nums.length
    let map = new Map()
    let length = 0
    for(let i = 0; i < N; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i], 1)
        }
    }
    let setIter = map.entries()
    let Item = setIter.next()
    while(Item.value !== undefined) {
        let val = Item.value[0]
        let tempVal = val
        while(map.has(tempVal + 1)) {
            map.set(val, map.get(val) + map.get(tempVal + 1))
            map.delete(tempVal + 1)
            tempVal = tempVal + 1
        }
        Item = setIter.next()
    }
    let mapIter = map.values()
    let mapItem = mapIter.next()
    while(mapItem.value !== undefined) {
        length = Math.max(mapItem.value, length)
        // console.log(mapItem.value)
        mapItem = mapIter.next()
    }
    console.log(length)
};
longestConsecutive([100, 4, 200, 1, 3, 2])