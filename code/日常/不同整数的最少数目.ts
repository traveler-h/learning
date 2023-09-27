function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  let map = new Map()
  arr.forEach(item => {
      if(map.has(item)) {
          map.set(item, map.get(item) + 1)
      } else {
          map.set(item, 1)
      }
  })
  let arrayObj: number[][]= Array.from(map);
  if(k === 0) return arrayObj.length
  arrayObj.sort((a, b) => a[1] - b[1]);
  let index: number = 0;
  for(let i = 0; i < arrayObj.length; ) {
      if(index === k) break
      if(arrayObj[i][1] > 0) {
          --arrayObj[i][1]
          ++index
      } else {
          i++
      }
  }
  let temp:number[][] = arrayObj.filter(a => a[1] !== 0)
  return temp.length
};

let arr = [1], key = 0

findLeastNumOfUniqueInts(arr, key)