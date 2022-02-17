/**
 Do not return anything, modify matrix in-place instead.
 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 */
function setZeroes(matrix: number[][]): void {
    if (matrix.length == 0) return
    const row: any = {}
    const col: any = {}
    matrix.forEach((item: number[], index: number) => {
        item.forEach((subItem, subIndex) => {
            if (subItem == 0) {
                row[index] = '0'
                col[subIndex] = '0'
            }
        })
    })
    Object.keys(row).forEach((i: any) => {
        matrix[i] = Array(matrix[i].length).fill(0)
    })
    Object.keys(col).forEach((i: any) => {
        matrix.forEach(subItem => {
            subItem[i] = 0
        })
    })
}
const test: number[][] = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
]
setZeroes(test)
