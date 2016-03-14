console.time("time");

var limit = 100;
var sumOfSquares = (limit)*(limit+1)*(2*limit+1)/6
var squareOfSum = (limit)*(limit+1)/2;
squareOfSum = squareOfSum*squareOfSum;

console.log(squareOfSum - sumOfSquares);

console.timeEnd("time");
