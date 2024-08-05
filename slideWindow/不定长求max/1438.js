/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let queMax = [];
  let queMin = [];
  let left = 0;
  let right = 0;
  let res = 0;
  while (right < nums.length) {
    while (queMax.length && nums[right] > queMax[queMax.length - 1]) {
      queMax.pop();
    }
    while (queMin.length && nums[right] < queMin[queMin.length - 1]) {
      queMin.pop();
    }
    queMax.push(nums[right]);
    queMin.push(nums[right]);
    while(queMax.length && queMin.length && queMax[0] - queMin[0] > limit){
      if(queMax[0] === nums[left]){
        queMax.shift();
      }
      if(queMin[0] === nums[left]){
        queMin.shift();
      }
      left++;
    }
    res = Math.max(res, right - left + 1);
    right++;
  }
  return res;

};
