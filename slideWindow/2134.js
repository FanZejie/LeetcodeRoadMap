/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) sum++;
  }
  //sum为窗口大小
  let left = 0;
  let count = 0; //1的个数
  let res = 0;
  for (let right = 0; right < nums.length; right++) {
    if (right < sum - 1) {
      if (nums[right] === 1) count++;
      continue;
    }
    if (nums[right] === 1) count++;

    res = Math.max(res, count);
    if (nums[left] === 1) count--;
    left++;
  }
  let right = 0
  while(left < nums.length) {
    if (nums[right] === 1) count++;
    res = Math.max(res, count);
    
    if (nums[left] === 1) count--;
    right++;
    left++;
  }
  return sum - res;
};

console.log(minSwaps([0, 1, 0, 1, 1, 0, 0])); // 3
