/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let x = matrix[0].length
    let y = matrix.length
    let arr = []
    for(let i=0;i<y;i++){
        for(let j=0;j<x;j++){
            if(matrix[i][j] == 0){
            arr.push([i,j])
            }
        }
    }

    for(let i = 0;i<arr.length;i++){
        let row = arr[i][0]
        let col = arr[i][1]
        
        for(let count=0;count<x;count++){
            matrix[row][count] = 0
        }
        for(let count=0;count<y;count++){
            matrix[count][col] = 0
        }
    }
};

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
setZeroes(matrix)
console.log(matrix)