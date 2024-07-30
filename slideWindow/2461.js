var maximumSubarraySum = function (nums, k) {
  let sum = 0;
  let left = 0;
  let max = 0;
  let map = new Map();
  for (let right = 0; right < nums.length; right++) {
    if (right < k - 1) {
      sum += nums[right];
      map.set(nums[right], (map.get(nums[right]) || 0) + 1);
      continue;
    }
    sum += nums[right];
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);
    if (map.size == k) {
      max = Math.max(max, sum);
    }
    if (map.get(nums[left]) == 1) {
      map.delete(nums[left]);
    } else {
      map.set(nums[left], map.get(nums[left]) - 1);
    }
    sum -= nums[left];
    left++;
  }
  return max;
};

console.log(maximumSubarraySum([9, 9, 9, 1, 2, 3], 3)); // 15
