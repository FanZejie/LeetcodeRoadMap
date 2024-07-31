/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let left = 0,
    max = 0,
    sum = 0,
    map = new Map();
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    map.set(nums[right], map.get(nums[right]) ? map.get(nums[right]) + 1 : 1);

    while (map.get(nums[right]) > 1){
      sum -= nums[left];
      map.set(nums[left], map.get(nums[left]) - 1);
      if (map.get(nums[left]) === 0) map.delete(nums[left]);
      left++;
    }
    max = Math.max(max, sum);
  }
  return max;
};

console.log(maximumUniqueSubarray([5,2,1,2,5,2,1,2,5]));
