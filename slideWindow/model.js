function model(s, k) {
  let map = new Map();
  let left = 0,
    res = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    map.set(cur, (map.get(cur) || 0) + 1); //1 进：当前遍历的i进入窗口
    while (map.size > k) {
      //2 出：窗口长度大于k，left右移，出窗口
      let c = s[left];
      map.set(c, map.get(c) - 1);
      if (map.get(c) === 0) {
        map.delete(c);
      }
      left++;
    }
    res = Math.max(res, i - left + 1); //3 计算结果
  }
}


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