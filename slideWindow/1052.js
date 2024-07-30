var maxSatisfiedAns = function (customers, grumpy, minutes) {
  const s = [0, 0];
  let maxS1 = 0;
  for (let i = 0; i < customers.length; i++) {
    s[grumpy[i]] += customers[i];
    if (i < minutes - 1) {
      // 窗口长度不足 minutes
      continue;
    }
    console.log(s);
    maxS1 = Math.max(maxS1, s[1]);
    // 窗口最左边元素离开窗口
    s[1] -= grumpy[i - minutes + 1] ? customers[i - minutes + 1] : 0;
  }
  return s[0] + maxS1;
};
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  let total = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      total += customers[i];
    }
  }
  let increase = 0
  for(let i=0; i<minutes; i++){ 
    if( grumpy[i] === 1){
      increase += customers[i]
    }
   }
  let maxIncrease = increase

  for(let i=minutes; i<customers.length; i++){

    if( grumpy[i] === 1){
      increase += customers[i]
    }
    if(grumpy[i-minutes] === 1){
      increase -= customers[i-minutes]
    }
    maxIncrease = Math.max(maxIncrease, increase)

  }
  return total + maxIncrease
};

console.log(
  maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3)
); // 16
