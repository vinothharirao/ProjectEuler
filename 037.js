var count = 0,number = 10,sum = 0;
while(true) {
	if(isPrime(number)) { 
		if(isTruncatable(number)) {
			count ++;
			sum += number;
		}
	}
	number ++;
	if(count == 11) break;
}
console.log(sum);

function isTruncatable(n) {
	if(RightToLeft(n) && LeftToRight(n)) return true;
	return false;
}
function RightToLeft(n) {
	while(n) {
		if(isPrime(n)) {
			n = Math.floor(n/10);			
		}else return false;
	}
	return true;
}
function LeftToRight(n) {
	var divisor = 1,num = n;
	while(num >= divisor) {
		divisor *= 10;
		if(isPrime(n)) {
			n = num % divisor;			
		} else return false;
	}
	return true;
}
function isPrime(n) {
	if(n == 1) return false;
	for(var i=2;i<=Math.sqrt(n);i++) {
		if(n % i == 0) return false;
	}
	return true;
}