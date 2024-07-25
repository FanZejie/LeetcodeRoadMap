var divisorSubstrings = function(num, k) {
    let left = 0
    let count = 0

    while (left <= num.toString().length - k) {
        let substring = num.toString().substring(left, left + k)
        if (num % parseInt(substring) === 0) count++
        left++
    }
    return count
};

console.log(divisorSubstrings(240, 2)) //2