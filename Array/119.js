var getRow = function(rowIndex) {
    let arr = new Array()
    for(let i=0;i<rowIndex+1;i++){
        arr[i] = new Array()
        arr[i][0] = arr[i][i] = 1
        for(let j=1;j<i;j++){
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
        }
    }
    return arr[rowIndex]
};

console.log(getRow(3)) // [1,3,3,1]