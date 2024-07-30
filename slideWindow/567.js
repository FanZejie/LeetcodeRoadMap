/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  let s1Map = new Map();
  let s2Map = new Map();
  for (let i = 0; i < s1.length; i++) {
    s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
    s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);
  }

  if (areMapsEqual(s1Map, s2Map)) {
    return true;
  }

  //如果两个字符串长度不想当，且前s1.length个字符的字符出现次数不相同，进行如下操作
  for (let i = s1.length; i < s2.length; i++) {
    s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);
    s2Map.set(s2[i - s1.length], s2Map.get(s2[i - s1.length]) - 1);
    if (s2Map.get(s2[i - s1.length]) === 0) {
      s2Map.delete(s2[i - s1.length]);
    }

    if (areMapsEqual(s1Map, s2Map)) {
      return true;
    }
  }
  return false;
};
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }

  for (let [key, value] of map1) {
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    }
  }

  return true;
}
console.log(checkInclusion("hello", "ooolleoooleh"));
