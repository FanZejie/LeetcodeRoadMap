/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0
    let right = 0
    let max = 0
    let numRepeatChar = 0
    let map = new Map()
    for(right;right<s.length;right++){
       let char = s[right]
        map.set(char,map.get(char)?map.get(char)+1:1)
        numRepeatChar = Math.max(numRepeatChar,map.get(char))
        if(right-left+1-numRepeatChar>k){
            map.set(s[left],map.get(s[left])-1)
            left++
        }
        max = Math.max(max,right-left+1)
    }
    return max
};

console.log(characterReplacement("BAAAB", 2))