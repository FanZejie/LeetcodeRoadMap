/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;
  let count = 1;
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = count;
      count++;
    }
    for (let i = top + 1; i <= bottom; i++) {
      matrix[i][right] = count;
      count++;
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i >= left; i--) {
        matrix[bottom][i] = count;
        count++;
      }
      for (let i = bottom - 1; i > top; i--) {
        matrix[i][left] = count;
        count++;
      }
    }

    left++;
    right--;
    top++;
    bottom--;
  }
  return matrix;
};

console.log(generateMatrix(3));
