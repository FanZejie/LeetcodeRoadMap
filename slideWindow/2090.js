/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let left = 0
    let sum = 0
    let res = []
    for(let i=0;i<2*k;i++){
        sum += nums[i]
    }
    for(let i=0;i<nums.length;i++){
        if(i < k){
            res.push(-1)
            continue
        }
        if(i < nums.length - k){
            let right = i + k
            sum += nums[right]
            res.push(parseInt(sum/(2*k+1)))
            sum = sum - nums[left]
            left++
        }else{
            res.push(-1)
        }
    }
    return res
};

console.log(getAverages([7,4,3,9,1,8,5,2,6], 3))