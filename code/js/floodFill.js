function floodFill(image, sr, sc, newColor) {
    var oldColor = image[sr][sc];
    image.forEach(function (item, index) {
        item.forEach(function (Iitem, Iindex) {
            if (index === sr && Iindex === sc) {
                dfs(image, index, Iindex, newColor, oldColor);
            }
        });
    });
    console.log(image);
    return [[1]];
}
function dfs(image, x, y, newColor, oldColor) {
    console.log(x, y);
    if (x < 0 || x >= image.length || y < 0 || y >= image[0].length || image[x][y] !== oldColor) {
        return;
    }
    image[x][y] = newColor;
    dfs(image, x - 1, y, newColor, oldColor);
    dfs(image, x + 1, y, newColor, oldColor);
    dfs(image, x, y + 1, newColor, oldColor);
    dfs(image, x, y - 1, newColor, oldColor);
}
var img = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
floodFill(img, 1, 1, 2);
/**
 * image: [[1,1,1],[1,1,0],[1,0,1]]
 * sr1
 * sc1
 * newColor2
 */ 
