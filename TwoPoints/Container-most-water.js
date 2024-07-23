/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0
    let left = 0
    let right = height.length - 1
    while(left < right){
        max = Math.max(Math.min(height[left],height[right]) * (right-left),max)
        height[left] < height[right] ? left++ : right--
    }
    return max

};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49