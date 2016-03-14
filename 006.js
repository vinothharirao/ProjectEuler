//Solution to find difference between square of sum of first 100 naturals and sum of their squares.

var limit = 100;
//sum of squares of n natural numbers = (n)(n+1)(2n+1)/6
var sumOfSquares = (limit)*(limit+1)*(2*limit+1)/6;
//sum of n natural numbers = (n)(n+1)/2
var squareOfSum = (limit)*(limit+1)/2;
squareOfSum = squareOfSum*squareOfSum;

console.log(squareOfSum - sumOfSquares);
