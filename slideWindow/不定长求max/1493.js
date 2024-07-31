var longestSubarray = function(nums) {
    let left = 0, right = 0, max = 0, count = 0; zeroCount=0;
    for(right; right < nums.length; right++) {
        if(nums[right] === 1) {
            count++;
            max = Math.max(max, count);
        }else{
            zeroCount++;
        }
        if(zeroCount > 1) {
            if(nums[left] === 0) {
                zeroCount--;
            }else{
                count--;
            }
            left++;
        }  
    }
    if(max == nums.length) return max-1
    return max;
};

console.log(longestSubarray([1,1,1]))