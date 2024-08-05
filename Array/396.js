/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    let f = 0, n = nums.length, numSum = _.sum(nums);
    for (let i = 0; i < n; i++) {
        f += i * nums[i]; // 计算初始的f(0)
    }
    let res = f;
    for (let i = n - 1; i > 0; i--) {
        f += numSum - n * nums[i]; // 计算f(i) = f(i-1) + numSum - n * nums[i]
        res = Math.max(res, f); // 更新最大值
    }
    return res;
};


console.log(maxRotateFunction([4,3,2,6]))