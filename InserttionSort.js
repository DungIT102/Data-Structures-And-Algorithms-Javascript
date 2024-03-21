function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j > -1 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }

  return arr;
}

let arr = [56, 23, 12, 3, 4, 88];
console.log(insertionSort(arr));
