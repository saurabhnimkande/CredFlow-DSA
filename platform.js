let arrival = [2.1, 4.3, 5.15, 7.15, 8.45];
let departure = [3.3, 5.5, 6.2, 9.5, 12.1];
let n = 5;

// BruteForce method
// timeComplexity: O(N^2)
// spaceComplexity:O(1);
function approch1(arrival, departure, n) {
  let ans = -99999999999;
  for (let i = 0; i < n; i++) {
    let min = 1;
    for (let j = i + 1; j < n; j++) {
      if (arrival[i] > arrival[j] && arrival[i] <= departure[j]) {
        min++;
      } else if (arrival[j] >= arrival[i] && arrival[j] <= departure[i]) {
        min++;
      }
    }
    ans = Math.max(min, ans);
  }
  console.log(ans);
}

//using Greddy algorithm
// timeComplexity: O(N*log(N))
// spaceComplexity:O(1);
function approch2(arrival, departure, n) {
  let ans = -99999999999;
  let i = 1;
  let j = 0;
  arrival = quickSort(arrival, 0, n - 1);
  departure = quickSort(departure, 0, n - 1);
  let count = 1;
  while (i < n && j < n) {
    if (arrival[i] <= departure[j]) {
      count++;
      i++;
    } else if (arrival[i] > departure[j]) {
      j++;
      count--;
    }

    ans = Math.max(ans, count);
  }
  console.log(ans);
}

//Quick Sort Algorithm for Sorting
//timeComplexity O(N*log(n))
// spaceComplextiy O(1) in place algorithm
function swap(i, j, arr) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
function partition(arr, low, high) {
  let i = low;
  let j = high;
  let piv = arr[high];
  while (i < j) {
    while (arr[i] < piv && i < high) {
      i++;
    }
    while (arr[j] >= piv && j > 0) {
      j--;
    }
    if (i < j) {
      swap(i, j, arr);
    }
  }
  swap(high, i, arr);
  return i;
}
function quickSort(arr, low, high) {
  if (low < high) {
    let index = partition(arr, low, high);
    quickSort(arr, low, index - 1);
    quickSort(arr, index + 1, high);
  }
  return arr;
}

approch1(arrival, departure, n);
approch2(arrival, departure, n);
