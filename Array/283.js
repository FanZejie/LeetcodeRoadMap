var moveZeroes = function(nums) {
    let n = nums.length
    let i = 0
    while(i < n){
        if(nums[i] === 0){
            nums.splice(i, 1)
            nums.push(0)
            n--
        }else{
            i++
        }
    }
    return nums
};

console.log(moveZeroes([0,0,1])) // [1,3,12,0,0]