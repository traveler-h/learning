/**
 * 
 * @param image 
 * @param sr 
 * @param sc 
 * @param newColor 
 * @returns 
 * 
 * 有一幅以二维整数数组表示的图画，每一个整数表示该图画的像素值大小，数值在 0 到 65535 之间。
 * 给你一个坐标 (sr, sc) 表示图像渲染开始的像素值（行 ，列）和一个新的颜色值 newColor，
 * 让你重新上色这幅图像。
 * 为了完成上色工作，从初始坐标开始，
 * 记录初始坐标的上下左右四个方向上像素值与初始坐标相同的相连像素点，
 * 接着再记录这四个方向上符合条件的像素点与他们对应四个方向上像素值与初始坐标相同的相连像素点，
 * ……，重复该过程。将所有有记录的像素点的颜色值改为新的颜色值。
 * 最后返回经过上色渲染后的图像
 */
function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    const oldColor = image[sr][sc]
    image.forEach((item, index) => {
        item.forEach((Iitem, Iindex) => {
            if (index === sr && Iindex === sc) {
                dfs(image, index, Iindex, newColor, oldColor)
            }
        })
    })
    console.log(image)
    return [[1]]
}
function dfs(image: number[][], x: number, y: number, newColor: number, oldColor: number) {
    console.log(x,y)
    if (x < 0 || x >= image.length || y < 0 || y >= image[0].length || image[x][y] !== oldColor) {
        return
    }
    image[x][y] = newColor
    dfs(image, x - 1, y, newColor, oldColor)
    dfs(image, x + 1, y, newColor, oldColor)
    dfs(image, x , y + 1, newColor, oldColor)
    dfs(image, x , y - 1, newColor, oldColor)
}
let img = [[1,1,1],[1,1,0],[1,0,1]]
floodFill(img, 1, 1, 2)
/**
 * image: [[1,1,1],[1,1,0],[1,0,1]]
 * sr1
 * sc1
 * newColor2
 */