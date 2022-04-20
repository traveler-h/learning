/**
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。
 * 你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。
 * 给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？
 */
var gift = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];
function maxValue(grid) {
    var m = grid.length, n = grid[0].length;
    for (var i = 0; i <= m - 1; i++) {
        for (var j = 0; j <= n - 1; j++) {
            if (i === 0 && j === 0)
                continue;
            if (i === 0)
                grid[i][j] += grid[i][j - 1];
            else if (j === 0)
                grid[i][j] += grid[i - 1][j];
            else
                grid[i][j] += Math.max(grid[i][j - 1], grid[i - 1][j]);
        }
    }
    return grid[m - 1][n - 1];
}
;
// maxValue(gift)
function maxValue1(grid) {
    var m = grid.length, n = grid[0].length;
    for (var i = 1; i < m; i++) {
        grid[i][0] += grid[i - 1][0];
    }
    for (var j = 1; j < n; j++) {
        grid[0][j] += grid[0][j - 1];
    }
    for (var i = 1; i <= m - 1; i++) {
        for (var j = 1; j <= n - 1; j++) {
            grid[i][j] += Math.max(grid[i][j - 1], grid[i - 1][j]);
        }
    }
    console.log(grid[m - 1][n - 1]);
    return grid[m - 1][n - 1];
}
;
maxValue1(gift);
