var findDisappearedNumbers = function(nums) {
    let set = new Set()
    for(let i=1;i<=nums.length;i++){
        set.add(i)
    }
    for(const num of nums){
        if(set.has(num)){
            set.delete(num)
        }
    }
    // let res = []
    // for(const value of set){
    //     res.push(value)
    // }
    // return res
   return [...set]
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))