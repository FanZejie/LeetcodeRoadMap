// longest substring with at most two distinct characters
// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
//subscribe

/*
    given a string, find the length of the longest substring T that contains at most 2 distinct characters.
    input: s = "eceba"
    output: 3
    explanation: T is "ece" or "ebe".

    example 2:
    input: s = "ccaabbb"
    output: 6
    explanation: T is "bbaaa" which is also "baaabb".
*/

const lengthOfLongestSubstringTwoDistinct = (s) => {
  let left = 0;
  let max = 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    map.set(char, map.has(char) ? map.get(char) + 1 : 1);
    while (map.size > 2) {
      let leftChar = s[left];
      map.set(leftChar, map.get(leftChar) - 1);
      if (map.get(leftChar) === 0) {
        map.delete(leftChar);
      }
      left++;
    }
    max = Math.max(max, i - left + 1);
  }
  return max;
};

console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb")); // 6
