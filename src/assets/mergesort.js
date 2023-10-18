/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */

function mergeTwoArr(a, b) {
    console.log('merge two arr', a, b)
    if (b[0] >= a[a.length - 1]) {
        return [...a, ...b]
    }
    for(let i = 0; i < b.length; i++) {
      const current = b[i];
  
      let pos = a.length - 1;
      for (let j = 0; j < a.length; j++) {
        if(current <= a[j]) {
          pos = j;
          break;
        }
      }

      a.splice(pos, 0, current)
    }
    
    console.log('merge return', a)
    return a;
  }
  
  export default function recursiveMergeSort(arr) {
    console.log(arr)
    if (arr.length <= 1) {
      return arr;
    }
  
    let i = 0;
    let j = arr.length - 1;
    let mid = Math.floor((i + j) / 2);

    console.log(i, j, mid)
  
    return mergeTwoArr(recursiveMergeSort(arr.slice(i, mid + 1)), recursiveMergeSort(arr.slice(mid + 1)))
  }

  recursiveMergeSort([1, 2, 3, 4, 5, 0])