/**
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。
 * 如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，
 * 其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
 * 同一个单元格内的字母不允许被重复使用。
 * 示例 1：
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 * 输出：true
 * 示例 2：
 * 输入：board = [["a","b"],["c","d"]], word = "abcd"
 * 输出：false
 * @param board
 * @param word
 */
var board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
var word = 'ABCCEF';
function exist(board, word) {
    var ress = board.some(function (item, index) {
        return item.some(function (Iitem, Iindex) {
            if (_dfs(board, word, index, Iindex, 0))
                return true;
        });
    });
    console.log(ress);
    console.log(false);
    return false;
}
;
var str = "";
var _dfs = function (board, word, x, y, k) {
    if (x >= board.length || x < 0 || y >= board[0].length || y < 0 || board[x][y] !== word[k])
        return false;
    if (k === word.length - 1) {
        console.log(true);
        return true;
    }
    board[x][y] = '';
    var res = _dfs(board, word, x + 1, y, k + 1) || _dfs(board, word, x - 1, y, k + 1) || _dfs(board, word, x, y + 1, k + 1) || _dfs(board, word, x, y - 1, k + 1);
    board[x][y] = word[k];
    return res;
};
exist(board, word);
