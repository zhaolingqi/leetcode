"use strict";
/**
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 */
function totalNQueens(n) {
    let columns = new Map();
    let diagonalLeft = new Map();
    let diagonalRight = new Map();
    // let queens: Array<number> = new Array(n).fill(-1);
    let count = 0;
    trace(n, 0);
    return count;
    function trace(n, i) {
        if (i === n) {
            count++;
            return;
        }
        // 第i行第j列
        for (let j = 0; j < n; j++) {
            if (columns.has(j))
                continue;
            if (diagonalLeft.has(i - j))
                continue;
            if (diagonalRight.has(i + j))
                continue;
            columns.set(j, 1);
            diagonalLeft.set(i - j, 1);
            diagonalRight.set(i + j, 1);
            trace(n, i + 1);
            columns.delete(j);
            diagonalLeft.delete(i - j);
            diagonalRight.delete(i + j);
        }
    }
}
;
totalNQueens(4);
