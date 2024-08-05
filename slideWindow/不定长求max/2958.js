/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
  let left = 0;
  let max = 0;
  let map = new Map();
  for (let right = 0; right < nums.length; right++) {
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);
   
    while (map.get(nums[right]) > k) {
      if (map.get(nums[left]) > 1) {
        map.set(nums[left], map.get(nums[left]) - 1);
      } else {
        map.delete(nums[left]);
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
    
  }
  return max;
};

console.log(maxSubarrayLength([1,2,1,2,1,2,1,2], 1));
