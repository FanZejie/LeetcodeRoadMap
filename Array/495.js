var findPoisonedDuration = function(timeSeries, duration) {
    let left = 0
    let right = 0
    let count = 0
    for(let i=0;i<timeSeries.length;i++){
        if(right < timeSeries[i]){
            left = timeSeries[i]
            right = left + duration - 1
            count += duration

            console.log('left',left)
            console.log('right',right)
            console.log('count',count)
        }else{
            left = right+1
            right = timeSeries[i] + duration
            count = right-left+1
            console.log('left',left)
            console.log('right',right)
            console.log('count',count)
        }
        
    }
    return count
};

console.log(findPoisonedDuration([1,2],2)) // 4