/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function (nums, k, x) {
  let result = [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    if (i >= k - 1) {
      let count = 0;
      for (let j = -50; j <= 0; j++) {
        count += map.get(j) || 0;
        if (count >= x) {
          result.push(j);
          break;
        }
        if (j === 0) {
          result.push(0);
        }
      }
      map.set(nums[i-k+1],map.get(nums[i-k+1])-1)
    }
  }
  return result;
};

console.log(getSubarrayBeauty([1, -1, -3, -2, 3], 3, 2)); // [-1,-2,-2]
