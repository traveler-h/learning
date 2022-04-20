/**
 * 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 * 一个机器人从坐标 [0, 0] 的格子开始移动，
 * 它每次可以向左、右、上、下移动一格（不能移动到方格外），
 * 也不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
 * 但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？
 */
let mm = 3, nn = 2, kk = 17;
let count = 0;
function movingCount(m, n, k) {
    let _arr = [];
    for (let i = 0; i < m; i++) {
        let item = [];
        for (let j = 0; j < n; j++) {
            item.push(0);
        }
        _arr.push(item);
    }
    __dfs(_arr, 0, 0, k);
    console.log(count);
    return count;
}
;
const __dfs = (arr, x, y, k) => {
    if (x < 0 || x >= mm || y < 0 || y >= nn || (handleSum(x) + handleSum(y)) > k || arr[x][y] === -1)
        return;
    arr[x][y] = -1;
    count++;
    console.log(arr);
    __dfs(arr, x - 1, y, k);
    __dfs(arr, x + 1, y, k);
    __dfs(arr, x, y - 1, k);
    __dfs(arr, x, y + 1, k);
};
function handleSum(n) {
    let res = 0;
    while (n !== 0) {
        res += n % 10;
        n = parseInt((n / 10) + '');
    }
    return res;
}
movingCount(mm, nn, kk);
