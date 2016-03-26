//Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
var sum = 0;
var number = 2;

var upperBound = calculateBound(5);

while(true) {
	if(isValid(number)) sum += number;
	number++;
	if(number == upperBound) break;
}
console.log(sum);

function calculateBound(power) {
	var noOfdigits = 1;
	largest = 9;
	while(Math.pow(9,power) * noOfdigits >= largest) {	
		noOfdigits ++;
		largest = (largest * 10) + 9;
	}
	return largest;
}
function isValid(n) {
	if(n == SumOfPowers(n,5)) return true;
	return false;
}
function SumOfPowers(n,pow) {
	var sum = 0;
	while(n) {
		sum += Math.pow(n%10,pow);
		n = Math.floor(n/10);
	}
	return sum;
}