/**
 * 
给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。
 */
/**
 * 方法1.借助额外空间，使用map进行解题
 * 
 * 方法2：用一个n位的二进制数来保存1-n是否出现 缺点：js是32位整型，所以这种方法只能解决32以下的问题
 * 
 * 方法3：快慢指针
 *         
 * 方法4：二分查找 
 * cnt[i]表示nums中小于等于i的个数，假设重复的数为target，
 * 则[1, target - 1]中，必有i <= cnt[i],
 * 再[target, n] 中，i>cnt[i]
 * 
 *         
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const n = nums.length;
    let l = 1, r = n - 1, ans = -1;
    while (l <= r) {
        let mid = (l + r) >> 1;
        let cnt = 0;
        for (let i = 0; i < n; ++i) {
            cnt += nums[i] <= mid;
        }
        if (cnt <= mid) {
            l = mid + 1;
        } else {
            r = mid - 1;
            ans = mid;
        }
    }
    return ans;

};
let res = findDuplicate([13,46,8,11,20,17,40,13,13,13,14,1,13,36,48,41,13,13,13,13,45,13,28,42,13,10,15,22,13,13,13,13,23,9,6,13,47,49,16,13,13,39,35,13,32,29,13,25,30,13])

