/**
 * 128 最长连续序列
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 */

var longestConsecutive = function(nums) {
   let set = new Set(nums);
   let longest = 0;
   for(let num of nums) {
       if(!set.has(num-1)) {
           let currNum = num;
           let currStreak = 1;
           while(set.has(currNum+1)) {
               currNum += 1;
               currStreak += 1;
           }
           longest = Math.max(longest, currStreak);
       }
   }
   return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, -1])); // 2