function _numIslands(grid) {
    var count = 0;
    if (grid === null || grid.length === 0) {
        return 0;
    }
    grid.forEach(function (item, index) {
        item.forEach(function (Iitem, Iindex) {
            if (Iitem === "1") {
                count++;
                dfs(grid, index, Iindex);
            }
        });
    });
    console.log(count);
    return count;
}
function dfs(grid, x, y) {
    if (x < 0 ||
        x >= grid.length ||
        y < 0 ||
        y >= grid[0].length ||
        grid[x][y] === "0") {
        return;
    }
    grid[x][y] = "0";
    dfs(grid, x, y + 1); // 右
    dfs(grid, x, y - 1); // 左
    dfs(grid, x - 1, y); // 上
    dfs(grid, x + 1, y); // 下
}
var grids = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
];
_numIslands(grids);
