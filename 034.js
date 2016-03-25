console.time("v");
var sumOfCurious = 0;
var current = 3;

while(true) {
	if(isCurious(current)) {
		sumOfCurious += current;
	}
	current++;
	if(current == 1854721) break;
}
console.log(sumOfCurious);

function isCurious(n) {
	sumOffacts = 0;
	var copy = n;
	while(copy > 1) {
		sumOffacts += factorial((copy % 10));		
		copy /= 10;
	}
	if(n == sumOffacts) return true;
	return false;
}
function factorial(num) {
  var fact=1;
    for (var i = 2; i <= num; i++)
        fact = fact * i;
    return fact;
}

console.timeEnd("v");