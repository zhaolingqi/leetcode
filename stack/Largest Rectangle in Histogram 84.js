/**
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 */
/**
 * 以高度进行遍历，
 * 确定每个柱子i左右两边比离该柱子最近的比该柱子低的柱子的位置，计算面积，最后确定最大值。
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let N = heights.length
    let left = new Array(N)
    let right = new Array(N)
    let stack = []
    for(let i = 0; i < N; i++) {
        while(stack.length !== 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop()
        }
        left[i] = stack.length === 0 ? -1 : stack[stack.length - 1]
        stack.push(i)
    }
    stack.length = 0
    for(let i = N - 1; i >= 0; i--) {
        while(stack.length !== 0 && heights[i] <= heights[stack[stack.length - 1]]) {
            stack.pop()
        }
        right[i] = stack.length === 0 ? N : stack[stack.length - 1]
        stack.push(i)
    }
    console.log(left, right)
    let res = 0
    for(let i = 0; i < N; i++) {
        res = Math.max(res, (right[i] - left[i] - 1) * heights[i])
    }
    return res
};
largestRectangleArea([1,1])