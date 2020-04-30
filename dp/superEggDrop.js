/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
    let f = new Array(K + 1)
    for(let i = 0; i <= K; i++) {
        f[i] = new Array(N + 1)
    }   
    for(let i = 1; i <= N; i++) {
        f[1][i] = i
    }
    for(let i = 1; i <= K; i++) {
        f[i][1] = 1
    }
    for(let i = 1; i <= K; i++) {
        f[i][2] = 2
    }
    for(let i = 2; i <= K; i++) {
        let k = 2
        for(let j = 3; j <= N; j++) {
            while(k <= j && (f[i][j - k] > f[i - 1][k - 1])) {
                k++
            }
            f[i][j] =  Math.max(f[i - 1][k - 1] + 1, f[i][j - k] + 1)
        }
    }
    console.log(f)
    return f[K][N] 
};
superEggDrop(2,19)
// console.log(Math.max(2,2))


/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop2 = function(K, N) {

};