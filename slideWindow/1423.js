var maxScore = function (cardPoints, k) {
  const n = cardPoints.length;
  let m = n - k;
  let sum = 0;
  for (let i = 0; i < m; i++) {
    sum += cardPoints[i];
  }
  let total = sum;
  let min = sum;
  for (let i = m; i < n; i++) {
    total += cardPoints[i];
    sum += cardPoints[i] - cardPoints[i - m];
    min = Math.min(min, sum);
  }
  return total - min;
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3)); // 12
