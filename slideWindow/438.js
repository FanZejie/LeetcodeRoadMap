/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let result = [];
  let pMap = new Map();
  let sMap = new Map();
  for (let i = 0; i < p.length; i++) {
    pMap.set(p[i], (pMap.get(p[i]) || 0) + 1);
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }
  if (areMapsEqual(pMap, sMap)) result.push(0);

  for (let i = p.length; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    sMap.set(s[i - p.length], sMap.get(s[i - p.length]) - 1);
    if (sMap.get(s[i - p.length]) === 0) sMap.delete(s[i - p.length]);
    if (areMapsEqual(pMap, sMap)) result.push(i - p.length + 1);
  }
  return result;
};

let areMapsEqual = (map1, map2) => {
  if (map1.size !== map2.size) return false;
  for (let [key, value] of map1) {
    if (map2.get(key) !== value) return false;
  }
  return true;
};

console.log(findAnagrams("cbaebabacd", "abc")); // [0,6]
