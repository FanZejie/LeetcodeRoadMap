var maxSum = function(nums, m, k) {
    let sum = 0
    let max = 0
    let left = 0
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        if(i < k-1){
            sum += nums[i]
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
            continue
        }
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        sum += nums[i]
        if(map.size >= m){
            max = Math.max(max, sum)
        }
        if(map.get(nums[left]) === 1){
            map.delete(nums[left])
        }else{
            map.set(nums[left], map.get(nums[left]) - 1)
        }
        sum -= nums[left]
        left++
    }
    return max
};

console.log(maxSum([1], 1, 1)); // 18