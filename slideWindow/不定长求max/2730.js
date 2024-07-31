// 2730. 不定长度的半重复子字符串

var longestSemiRepetitiveSubstring = function(s) {
    let ans = 1, left = 0, same = 0, n = s.length
    for(let right = 1; right < n; right++){
        if(s[right] === s[right - 1] && ++same > 1){
            for(left++;s[left] !== s[left-1];left++);
            same = 1
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};

console.log(longestSemiRepetitiveSubstring("52233"))

