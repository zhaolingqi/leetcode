/**
 * 给定一个整数数组 nums，按要求返回一个新数组 counts。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。

示例:

输入: [5,2,6,1]
输出: [2,1,1,0] 
解释:
5 的右侧有 2 个更小的元素 (2 和 1).
2 的右侧仅有 1 个更小的元素 (1).
6 的右侧有 1 个更小的元素 (1).
1 的右侧有 0 个更小的元素.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let N = nums.length
    if( N < 1) return []
    let counts = new Array(N).fill(0)
    nums = nums.map((val, index) => {
        return {
            index : index,
            value : val
        }
    })
    // console.log(nums.slice(0, 3), counts)
    // for(let i = N - 2; i >=0 ; i--) {
    //     let tempCount = 0
    //     for(let j = N - 1; j > i; j--) {
    //         if(nums[i] > nums[j]) tempCount++
    //     }
    //     counts[i] = tempCount
    // }
    // return counts

    merge(0, N - 1)
    // console.log(counts)
    return counts
    function merge(start, end) {
        if(start === end) return
        let mid = parseInt((start + end) / 2)
        merge(start, mid)
        merge(mid + 1, end)
        // 左右合并
        let leftArr = nums.slice(start, mid + 1)
        let rightArr = nums.slice(mid + 1, end + 1)
        let M = leftArr.length
        let N = rightArr.length
        let i = 0, j = 0
        leftArr.sort((a, b) => {return b.value - a.value})
        rightArr.sort((a, b) => {return b.value - a.value})
        while(i < M && j < N) {
            if(leftArr[i].value <= rightArr[j].value) {
                j++
            } else {
                counts[leftArr[i].index] += N - j
                i++ 
            }
        }
        if(i === M) return 
    }


};
countSmaller([])