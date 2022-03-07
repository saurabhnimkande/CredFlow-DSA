function spiral(m, n, matrix) {
  let count = 0;
  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;
  let arr = [];
  while (count < m * n) {
    for (let i = top; i <= bottom && count < m * n; i++) {
      arr.push(matrix[i][left]);
      count++;
    }
    left++;
    for (let i = left; i <= right && count < m * n; i++) {
      arr.push(matrix[bottom][i]);
      count++;
    }
    bottom--;
    for (let i = bottom; i >= top && count < m * n; i--) {
      arr.push(matrix[i][right]);
      count++;
    }
    right--;
    for (let i = right; i >= left && count < m * n; i--) {
      arr.push(matrix[top][i]);
      count++;
    }
    top++;
  }
  console.log(arr.join(" "));
}

let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

let m = 3;
let n = 5;
spiral(m, n, matrix);
