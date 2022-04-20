// 递推
function getRow(rowIndex: number): number[] {
    let arr: number[][] = Array(rowIndex + 1).fill(0)
    for (let i: number = 0; i <= rowIndex; i++) {
        arr[i] = Array(i + 1).fill(0)
        arr[i][0] = arr[i][i] = 1
        for (let j: number = 1; j < i; j++) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
        }
    }
    return arr[rowIndex]
};

getRow(3)

// 优化： 滚动数组

function roll_getRow(rowIndex: number): number[] {
    let cur: number[] = [], pre: number[] = []
    for (let i: number = 0; i <= rowIndex; i++) {
        cur = Array(i + 1).fill(0)
        cur[0] = cur[i] = 1
        for (let j: number = 1; j < i; j++) {
            cur[j] = pre[j - 1] + pre[j]
        }
        pre = cur
    }
    return pre
};

roll_getRow(3)


// 优化： 只用一个数组
function better_getRow (rowIndex: number): number[] {
    const row: number[] = new Array(rowIndex + 1).fill(0);
    row[0] = 1;
    for (let i: number = 1; i <= rowIndex; ++i) {
        for (let j: number = i; j > 0; --j) {
            row[j] += row[j - 1];
            console.log(i, j, row)
        }
    }
    return row;
};


better_getRow(4)

