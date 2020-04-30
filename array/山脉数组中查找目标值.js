/**
 * 给你一个 山脉数组 mountainArr，请你返回能够使得 mountainArr.get(index) 等于 target 最小 的下标 index 值。

如果不存在这样的下标 index，就请返回 -1。

 

何为山脉数组？如果数组 A 是一个山脉数组的话，那它满足如下条件：

首先，A.length >= 3

其次，在 0 < i < A.length - 1 条件下，存在 i 使得：

A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]
 

你将 不能直接访问该山脉数组，必须通过 MountainArray 接口来获取数据：

MountainArray.get(k) - 会返回数组中索引为k 的元素（下标从 0 开始）
MountainArray.length() - 会返回该数组的长度
 */
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * 三次二分查找，第一次找到峰顶，第二次在递增序列中二分查找，第三次在递减序列中二分查找
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    
};