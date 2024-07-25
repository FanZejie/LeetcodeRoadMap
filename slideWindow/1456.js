/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let left = 0,
    right = 0,
    count = 0,
    max = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  for(right; right < s.length; right++) {
    let cur = s[right];
    if (vowels.has(cur)) count++;
    if (right - left + 1 === k) {
      max = Math.max(max, count);
      if (vowels.has(s[left])) count--;
      left++;
    }
  }
  return max;
};

console.log(maxVowels("abciiidef", 3)); // 3
