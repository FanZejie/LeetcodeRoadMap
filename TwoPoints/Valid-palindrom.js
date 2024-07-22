/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let formats = s.replace(/[^a-zA-Z0-9]/g,"").replace('/\s/g',"").toLowerCase()
    let left =0
    let right = formats.length -1
    while(left<right){
        if(formats[left]!==formats[right]){
            return false
        }
        left++
        right--
}
return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))