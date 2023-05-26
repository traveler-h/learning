/**
 * @param {string} s
 * @return {number}
 */
// 初始
var lengthOfLongestSubstring = function (s) {
	if (s.length > 0) {
		let temp = [];
		const getStr = (s) => {
      let res = ''
			const arr = s.split("");
			for (let i = 0; i < arr.length; i++) {
				if (res.includes(arr[i])) {
					break;
				} else {
					res += arr[i];
					const ss = s.slice(1);
					if (ss.length > 0) {
						getStr(ss, res);
					} else {
						 break;
					}
				}
			}
      return res
		};
		for (let i = 0; i < s.length; i++) {
			temp.push(getStr(s.slice(i)));
		}
		temp = temp.map(a => a.length).sort((a, b) => b - a);
		const result = temp.length > 0 ? temp[0] : 0;
    console.log(result)
		return result;
	} else {
    console.log(0)
		return 0;
	}
}

// 优化
const lengthOfLongestSubstring = (s) => {
  let maxLength = 0;
  const set = new Set();
  let i = 0;
  for (let j = 0; j < s.length; j++) {
    while (set.has(s[j])) {
      set.delete(s[i]);
      i++;
    }
    set.add(s[j]);
    maxLength = Math.max(maxLength, j - i + 1);
  }
  console.log(maxLength);
  return maxLength;
};

const test = "yrumpkqjfdx";
lengthOfLongestSubstring(test);

