/**
 * @param {string} s
 * @return {number}
 * 根据题意，如果在待替换子串之外的任意字符的出现次数超过 m= 
4
n
​
 ，那么无论怎么替换，都无法使这个字符在整个字符串中的出现次数为 m。

反过来说，如果在待替换子串之外的任意字符的出现次数都不超过 m，那么可以通过替换，使 s 为平衡字符串，即每个字符的出现次数均为 m。

作者：灵茶山艾府
链接：https://leetcode.cn/problems/replace-the-substring-for-balanced-string/solutions/2108358/tong-xiang-shuang-zhi-zhen-hua-dong-chua-z7tu/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
var balancedString = function(s) {
    const n = s.length;
    const avg = n / 4;
    const map = {Q: 0, W: 0, E: 0, R: 0};
    for(const c of s) {
        map[c]++;
    }
    if(map.Q === avg && map.W === avg && map.E === avg && map.R === avg) {
        return 0;
    }

    let left = 0
    let right = 0;
    let min = n;
    while(right < n) {
        map[s[right]]--;
        while(map.Q <= avg && map.W <= avg && map.E <= avg && map.R <= avg) {
            min = Math.min(min, right - left + 1);
            map[s[left]]++;
            left++;
        
        }
        right++;
    }
    return min;
};

console.log(balancedString("WQWQW"));