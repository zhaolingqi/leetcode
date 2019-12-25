/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let N = nums.length
    let map = new Map()
    let maxNum = 0
    let max = 0
    for (let i = 0; i < N; i++) {
        if(!map.has(nums[i])) {
            map.set(nums[i], 1)
        } else {
            let val = map.get(nums[i])
            map.set(nums[i], ++val)
        }
    }

    for(let i = 0; i < N; i++) {
        let temp = map.get(nums[i])
        if(maxNum < temp) {
            maxNum = temp
            max = nums[i]
        }
    }
    return max
};
majorityElement([1,2,1,1,1,3,4,5,2,3,3,3,3,3,3,3,3])