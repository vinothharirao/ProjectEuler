//find sum of digits of 100!
var BigNumber = require('big-number');

var number = factorial(100);
var sum = 0;
for(var i=0;i<number.number.length;i++) {
	sum += number.number[i];
}
console.log(sum);

function factorial(n) {
	if(n == 0 || n == 1) return 1;
	return (BigNumber(n).multiply(factorial(n-1)));
}