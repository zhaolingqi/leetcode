/**
 *  滑动窗口最大值
给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

 

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

提示：

你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//     let output = []
//     let tempArr = new Array(k)
//     let N = nums.length
//     if(k === 0 || N < 1) return output
//     for(let i = 0; i < k; i++) {
//         tempArr[i] = nums[i]
//     }
//     output.push(Math.max.apply(null,tempArr))
//     for(let i = k; i < N; i++) {
//         tempArr.shift()
//         tempArr.push(nums[i])
//         output.push(Math.max.apply(null,tempArr))
//     }
//     console.log(output)
//     return output
// };
var maxSlidingWindow = function (nums, k) {
    let output = []
    let tempQue = [] //双向队列
    let N = nums.length
    if(k === 0 || N < 1) return output
    // 初始化双向队列数组
    for (let i = 0; i < k; i++) {
        if(tempQue.length === 0) tempQue.push(i)
        else {
            cleanQue(i)
        }
    }
    output[0] = nums[tempQue[0]]
    for(let i = k; i < N; i++) {
        cleanQue(i)
        //判断队列中的第一个元素是否在滑动窗口内
        if(tempQue[0] < i - k + 1) {
            tempQue.shift()
        }
        output.push(nums[tempQue[0]])
    }
    console.log(output)

    function cleanQue(i) {
        let M = tempQue.length, j = M - 1
        while(j >= 0) {
            if(nums[tempQue[j]] < nums[i]) {
                tempQue.pop()
                j--
            } else{
                tempQue.push(i)
                return
            }
        }
        tempQue.push(i)
    }
}
let nums = []
let k = 0
maxSlidingWindow(nums, k)