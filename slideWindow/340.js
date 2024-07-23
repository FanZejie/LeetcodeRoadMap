//340.Longest Substring with At Most K Distinct Characters
/**
 * Given a string s and an integer k, 
 * return the length of the longest substring of s that contains at most k distinct characters.
 */

/**
 * example 1:
 * Input: s = "eceba", k = 2
 * Output: 3
 * Explanation: The substring is "ece" which its length is 3.
 * 
 * example 2:
 * s = "aa", k = 1
 * Output: 2
 * Explanation: The substring is "aa" which its length is 2.
 */

var lengthOfLongestSubstringKDistinct = function(s, k) {
    let left = 0;
    let result = 0;
    let right = 0;
    let map = new Map();
    for(right; right < s.length; right++){
       let cur = s[right];
       map.set(cur, map.has(cur) ? map.get(cur) + 1 : 1);
       while(map.size > k){
          let leftChar = s[left];
          map.set(leftChar, map.get(leftChar) - 1);
          if(map.get(leftChar) === 0){
             map.delete(leftChar);
          }
          left++;
       }
       result = Math.max(result, right - left + 1);
    }
    return result;
};

console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // 3
