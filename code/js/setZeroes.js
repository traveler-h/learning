/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
    if (matrix.length == 0)
        return;
    var row = {};
    var col = {};
    matrix.forEach(function (item, index) {
        item.forEach(function (subItem, subIndex) {
            if (subItem == 0) {
                row[index] = '0';
                col[subIndex] = '0';
            }
        });
    });
    Object.keys(row).forEach(function (i) {
        matrix[i] = Array(matrix[i].length).fill(0);
    });
    Object.keys(col).forEach(function (i) {
        matrix.forEach(function (subItem) {
            subItem[i] = 0;
        });
    });
}
var test = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
];
setZeroes(test);
