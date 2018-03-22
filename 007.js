//to find 10001th prime.
var count = 0;
number = 1; 
while(count < 10001) {
	number++;
	if(isPrime(number)) count++;	
}
console.log(number);

function isPrime(n) {
	var flag = true;
	for(var i=2;i<=n/2;i++) {
		if(n%i == 0) {
			flag = false;
			break;
		}
	}
	return flag;
}