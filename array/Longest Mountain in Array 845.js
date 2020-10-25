/**
 * 我们把数组 A 中符合下列属性的任意连续子数组 B 称为 “山脉”：
 * B.length >= 3
 * 存在 0 < i < B.length - 1 使得 B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
 * （注意：B 可以是 A 的任意子数组，包括整个数组 A。）
 * 给出一个整数数组 A，返回最长 “山脉” 的长度。
 * 如果不含有 “山脉” 则返回 0。
 */
function longestMountain(A) {
    var N = A.length;
    var res = 0;
    if (N <= 1)
        return 0;
    var i = 0, j = 1;
    while (j < N) {
        if (A[i] >= A[j]) {
            i++;
            j++;
        }
        else {
            var start = i;
            var top_1 = start;
            var tempRes = 0;
            while (A[top_1] < A[top_1 + 1] && top_1 < N) {
                top_1++;
            }
            ;
            if (top_1 === N - 1)
                return res;
            var end = top_1;
            while (A[end] > A[end + 1] && end < N) {
                end++;
            }
            ;
            if (end === top_1)
                tempRes = 0;
            else
                tempRes = end - start + 1;
            res = Math.max(res, tempRes);
            i = end;
            j = end + 1;
        }
    }
    return res;
}
;
longestMountain([1, 2, 3, 4, 2, 1, 6, 7, 7, 2, 3, 5, 6]);
