var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    let res = []
    let top=0,left=0,right=matrix[0].length-1,bottom = matrix.length-1
    while(left <= right && top <=bottom){
        for(let col=left;col<right;col++){
            res.push(matrix[top][col])
        }
        for(let row=top;row<=bottom;row++){
            res.push(matrix[row][right])
        }
        if(left < right && top < bottom){
            for(let col=right-1;col>left;col--){
                res.push(matrix[bottom][col])
            }
            for(let row=bottom;row>top;row--){
                res.push(matrix[row][left])
            }
        }
        top++
        left++
        right--
        bottom--
    }
    return res
};

console.log(spiralOrder([[3],[2]]))