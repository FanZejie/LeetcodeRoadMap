var isValidSudoku = function (board) {
  // check rows
  for (let i = 0; i < 9; i++) {
    const row = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        if (row.has(board[i][j])) {
          return false;
        }
        row.add(board[i][j]);
      }
    }
  }
  // check columns
  for (let i = 0; i < 9; i++) {
    const col = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[j][i] !== ".") {
        if (col.has(board[j][i])) {
          return false;
        }
        col.add(board[j][i]);
      }
    }
  }
  // check 3x3 sub-boxes
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const subBox = new Set();
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          if (board[k][l] !== ".") {
            if (subBox.has(board[k][l])) {
              return false;
            }
            subBox.add(board[k][l]);
          }
        }
      }
    }
  }
  return true
};

console.log(
  isValidSudoku([["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]])
);
