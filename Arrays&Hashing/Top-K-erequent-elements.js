//347 前K个高频元素
//给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

var topKFrequent = function(nums, k) {
    let numsSorted = nums.sort();
    let map = new Map();
    for(let i = 0; i < numsSorted.length; i++){
        if(map.has(numsSorted[i])){
            map.set(numsSorted[i], map.get(numsSorted[i]) + 1);
        }else{
            map.set(numsSorted[i], 1);
        }
    }
    let result = [...map.keys()].sort((a,b) => map.get(b) - map.get(a)).slice(0, k);
    return result
};

console.log(topKFrequent([4,1,-1,2,-1,2,3], 2));