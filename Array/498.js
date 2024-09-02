/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let result = [];
  let m = mat.length;
  let n = mat[0].length;

  let flag = false; //是否反转
  let count = m + n - 1; //遍历次数

  for (let i = 0; i < count; i++) {
    const temp = [];
    for (let j = 0; j <= i; j++) {
        if(!mat[i-j] || mat[i-j][j] === undefined) continue;

        if(flag) {
            temp.unshift(mat[i-j][j]);
        } else {
            temp.push(mat[i-j][j]);
        }
    }
    result.push(...temp);
    flag = !flag;
  }
  
  return result;
};

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
