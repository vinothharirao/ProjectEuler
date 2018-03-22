//What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
var number = 3;
while(true) {
	if(!isWritable(number) && !isPrime(number)) {
		console.log(number);
		break;
	}
	number += 2;
}

function isWritable(n) {
	for(var i = 2;i < n; i++) {
		if(isPrime(i)) {
			var twice = n - i;
			var square = twice / 2;
			if(isSquare(square)) return true;
		}
	}
	return false;
}
function isSquare(n) {
	var num = Math.sqrt(n);
	return Math.floor(num) == Math.ceil(num);
}
function isPrime(n) {
	if(n < 2) return false;
	for(var i=2;i<=Math.sqrt(n);i++) {
		if(n%i == 0) return false;
	}
	return true;
}