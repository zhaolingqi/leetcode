/**
 * 给定一组非负整数，重新排列它们的顺序使之组成一个最大的整数。

示例 1:

输入: [10,2]
输出: 210
示例 2:

输入: [3,30,34,5,9]
输出: 9534330
说明: 输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    // if(nums.every((e) => {return e === 0})) return '0'
    // nums.sort((a, b) => {
    //     a = String(a)
    //     b = String(b)
    //     let M = a.length
    //     let N = b.length
    //     let i = 0
    //     while(i < M && i < N) {
    //         if(a[i] < b[i]) return 1
    //         else if(a[i] > b[i]) return -1
    //         else i++
    //     }
    //     if(i === M && i === N) return -1
    //     if(i === M) {
    //         let j = 0
    //         while(j < M) {
    //             if(a[j] > b[i]) return -1
    //             else if(a[j] < b[i]) return 1
    //             else j++
    //         }
    //     } 
    //     if(i === N) {
    //         let j = 0
    //         while(j < N) {
    //             if(b[j] > a[i]) return 1
    //             else if(b[j] < a[i]) return -1
    //             else j++
    //         } 
    //     }
    //     return 1
    // })
    // console.log(nums.join(''))
    // return nums.join('')
    nums.sort((a, b) => {
        a = String(a)
        b = String(b)
        if(a + b > b + a) return -1
        else return 1
    })
    console.log(nums)

};
// largestNumber([824,938,1399,5607,6973,5703,9609,4398,8247])
largestNumber([121,12])
// let a = String(123456)
// console.log(a[0])
