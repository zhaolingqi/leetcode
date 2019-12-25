/**
 *   打乱数组
打乱一个没有重复元素的数组。

示例:

// 以数字集合 1, 2 和 3 初始化数组。
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
solution.shuffle();

// 重设数组到它的初始状态[1,2,3]。
solution.reset();

// 随机返回数组[1,2,3]打乱后的结果。
solution.shuffle();
 */
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.resetNum = [...nums]
    this.N = nums.length
    this.shuffleNum = [...nums]
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.resetNum
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    // let flags = new Array(this.N).fill(true)
    // for(let i = 0; i < this.N; i++) {
    //     let index = Math.round((Math.random() * (this.N - 1)))
    //     while(!flags[index]) {
    //         index = Math.round((Math.random() * (this.N - 1)))
    //     }
    //     flags[index] = false
    //     this.shuffleNum[i] = this.resetNum[index]
    // }
    this.shuffleNum = [...this.resetNum]
    // for (let i = 0; i < this.N; i++) {
    //     let index = Math.round((Math.random() * (this.N - 1 - i) + i))
    //     let temp = this.shuffleNum[i]
    //     this.shuffleNum[i] = this.shuffleNum[index]
    //     this.shuffleNum[index] = temp
    // }
    for (let i = this.N - 1; i >= 0; i++) {
        let index = Math.floor(Math.random() * (i + 1))
        let temp = this.shuffleNum[i]
        this.shuffleNum[i] = this.shuffleNum[index]
        this.shuffleNum[index] = temp
    }
    return this.shuffleNum
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var obj = new Solution([1,2,3])
var param_1 = obj.reset()
var param_2 = obj.shuffle()
console.log(obj.reset(),obj.shuffle(),obj.reset(),obj.shuffle(),obj.reset(),obj.shuffle(),obj.reset(),obj.shuffle())
// console.log(Math.floor(Math.random() * 2))

