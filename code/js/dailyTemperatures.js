function dailyTemperatures(temperatures) {
    let res = [];
    if (temperatures.length === 1) {
        return [0];
    }
    else {
        for (let i = 0; i < temperatures.length; i++) {
            if (temperatures[i] < temperatures[i + 1]) {
                res.push(1);
            }
            else {
                let cur = temperatures[i];
                let curI = i;
                while (true) {
                    if (curI < temperatures.length) {
                        if (cur < temperatures[curI + 1]) {
                            res.push(curI + 1 - i);
                            break;
                        }
                        else {
                            curI++;
                        }
                    }
                    else {
                        console.log(cur, res);
                        res.push(0);
                        break;
                    }
                }
            }
        }
    }
    res[res.length - 1] = 0;
    console.log(res);
    return res;
}
let temps = [73, 74, 75, 71, 69, 72, 76, 73];
dailyTemperatures(temps);
/**
 * return [1,1,4,2,1,1,0,0]
 */
