/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */
export default function quickSort(arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
  
    let i = 0, j = arr.length - 1;
  
    while( i < j) {
      
      while(arr[j] >= pivot && i < j) {
        j--;
      }
      arr[i] = arr[j]

      while(arr[i] <= pivot && i < j) {
        i++;
      }
      arr[j] = arr[i]
  
    //   if (i <= j) {
    //     let temp = arr[i];
    //     arr[i - 1] = arr[j];
    //     arr[j] = temp;
    //     i++;
    //     j--;
    //   } else {
    //     break;
    //   }
    }
  
    arr[j] = pivot;
  
    console.log(j, arr)
    let a = quickSort(arr.slice(0, j))
    let b = quickSort(arr.slice(j + 1))
  
    return [...a, pivot, ...b];
  }


  console.log(quickSort([4, 5, 6, 1, 2, 3]))