/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let min = Number.MAX_VALUE;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum = sum - nums[left];
      left++;
    }
  }
  if(min == Number.MAX_VALUE){
    return 0
  }
  return min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
