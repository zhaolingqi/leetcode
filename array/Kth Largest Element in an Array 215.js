/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 */
var findKthLargest = function(nums, k) {
    let N = nums.length;
    let index = partition(nums, 0, N - 1);
    k = N - k + 1;
    while(index + 1 !== k) {
        if(index + 1 < k) index = partition(nums, index + 1, N - 1);
        else index = partition(nums, 0, index - 1);
    }
    return nums[index];

    function partition(nums, first, second) {
        let N = nums.length;
        let start = first + 1, end = second;
        let flag = first;
        while(true) {
            while(nums[start] < nums[flag] && start < second) start++;
            while(nums[end] >= nums[flag] && end > first) end --;
            if(start >= end) break;
            let temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
        }
        let temp = nums[end];
        nums[end] = nums[flag];
        nums[flag] = temp;
        return end;
    }
};
let res = findKthLargest([3,3,3,3,4,3,3,3,3], 1);
console.log(res);
