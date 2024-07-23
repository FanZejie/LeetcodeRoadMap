/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    while (set.has(cur)){
      set.delete(s[left]);
      left++;
    };
    set.add(cur);
    res = Math.max(res, i - left + 1);
  }
  return res;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

var betterMethod = function (s) {
  let map = new Map();
  let left = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    if (map.has(cur)) {
      left = Math.max(left, map.get(cur));
    }
    map.set(cur, i + 1);
    res = Math.max(res, i - left + 1);
  }
  return res
};
console.log(betterMethod("abcabcbb"));
