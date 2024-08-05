/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = Number.MAX_VALUE
    for(const num of nums){
        
        min = Math.min(num,min)
    }
    let count = 0
    for(const num of nums){
        count =count+ num - min
    }
    return count
};

console.log(minMoves([1,2,3]))