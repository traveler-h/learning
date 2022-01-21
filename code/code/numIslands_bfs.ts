/**
 * 
 * @param grid 
 * @returns 
 * 岛屿数量 bfs
 */
function numIslands(grid: string[][]): number {
    let count: number = 0
    if (grid.length === 0 || !grid) return count
    grid.forEach((item, index) => {
        item.forEach((i, d) => {
            if (i === '1') {
                count++
                bfs(grid, index, d)
                console.log(grid)
            }
            // console.log(i, `[ ${index} ,${d} ]`)
        })
    })
    console.log(count)
    return count
};

function bfs(grid: string[][], x: number, y: number) {
    grid[x][y] = '0'
    let length: number = grid.length
    let Ilength: number = grid[0].length

    if (x + 1 < length && grid[x + 1][y] && grid[x + 1][y] === '1') {
        //下边元素
        grid[x + 1][y] = '0'
        bfs(grid, x+1, y)
    }
    if (x - 1 >= 0 && x - 1 < length && grid[x - 1][y] && grid[x - 1][y] === '1') {
        //上边元素
        grid[x - 1][y] = '0'
        bfs(grid, x-1, y)
    }
    if (y + 1 < Ilength && grid[x][y + 1] && grid[x][y + 1] === '1') {
        // 右边元素
        grid[x][y + 1] = '0'
        bfs(grid, x, y+1)
    }
    if (y - 1 >= 0 && y - 1 < Ilength && grid[x][y - 1] && grid[x][y - 1] === '1') {
        // 左边元素
        grid[x][y - 1] = '0'
        bfs(grid, x, y-1)
    }
    return
}

const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]]
numIslands(grid)