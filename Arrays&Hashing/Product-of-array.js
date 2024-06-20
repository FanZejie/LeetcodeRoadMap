//238. 除自身以外数组的乘积
/**
给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */


var productExceptSelf = function(nums) {
    let left = new Array(nums.length).fill(1);
    let right = new Array(nums.length).fill(1);
    
    for(let i=1; i<nums.length; i++){
        left[i] = left[i-1] * nums[i-1];
    }

    for(let i=nums.length-2; i>=0; i--){
        right[i] = right[i+1] * nums[i+1];
    }
    let res = new Array(nums.length).fill(1);
    for(let i=0; i<nums.length; i++){
        res[i] = left[i] * right[i];
    }
    return res;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));