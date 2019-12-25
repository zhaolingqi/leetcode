/**
 * 递增的三元子序列
 * 给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。

数学表达式如下:

如果存在这样的 i, j, k,  且满足 0 ≤ i < j < k ≤ n-1，
使得 arr[i] < arr[j] < arr[k] ，返回 true ; 否则返回 false 。
说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1) 。
  
示例 1:

输入: [1,2,3,4,5]
输出: true
示例 2:

输入: [5,4,3,2,1]
输出: false
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let N = nums.length
    if (N < 3) return false
    let big = Number.POSITIVE_INFINITY, small = Number.POSITIVE_INFINITY
    for (let i = 0; i < N; i++) {
        if (nums[i] < small) small = nums[i]
        else if (nums[i] > small && nums[i] < big) big = nums[i]
        else if (nums[i] > big) return true
    }
    return false
};
let nums = [1, 2, -10, -8, -7]
console.log(increasingTriplet(nums))

// var num = 1
// var myObject = {
//     num: 2,
//     add: function() {
//         this.num = 3;
//         (function() {
//             console.log(this.num)
//             this.num = 88
//         })();
//         console.log(this.num)
//     },
//     sub: function() {
//         console.log(this.num)
//     }

// }
// myObject.add()  
// console.log(myObject.num)
// console.log(num)
// console.log(this.num)
// var sub = myObject.sub
// sub()