/**
 * 
给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。
 */
/**
 * dp(i,j)表示A[i]和B[J]
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    let M = A.length;
    let N = B.length;
    let dp = [];
    let max = 0;
    // dp(M,N) M行N列
    for(let i = 0; i < M; i++) {
        dp[i] = [];
    }
    for(let i = 0; i < M; i++) {
        dp[i][0] = B[i] === A[0] ? 1 : 0;
    }
    for(let i = 0; i < N; i++) {
        dp[0][i] = B[0] === A[i] ? 1 : 0;
    }
    for(let i = 1; i < M; i++) {
        for(let j = 1; j < N; j++) {
            if(B[i] === A[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                max = Math.max(dp[i][j], max);
            }
            else dp[i][j] = 0;
        }
    }
    console.log(dp);
    return max;
};
let res = findLength([0,0,0,0,1],[1,0,0,0,0]);
console.log(res);