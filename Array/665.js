/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let nums1= [...nums]
    let nums2= [...nums]
    let res1 = true;
    let res2 = true;
    for(let i=1 ; i<nums1.length;i++){
        if(nums1[i] < nums1[i-1] ){
            nums1.splice(i,1);
            break;
        }  
    }
    for(let i=0 ; i<nums1.length-1;i++){
        if(nums1[i] > nums1[i+1]){
            res1 = false;
        }
    }

    for(let i=1 ; i<nums2.length;i++){
        if(nums2[i] < nums2[i-1] ){
            nums2.splice(i-1,1);
            break;
        }  
    }
    for(let i=0 ; i<nums2.length-1;i++){
        if(nums2[i] > nums2[i+1]){
            res2 = false;
        }
    }

    return res1 || res2;
};

console.log(checkPossibility([5,7,1,8]))