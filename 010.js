//sum of primes below 2 million.
var number = 2000000;
var sum = 0;
while(number>1) {
	if(isPrime(number)) {
		sum += number;
	}
	number--;
}
console.log(sum);

function isPrime(n) {
	var limit = Math.floor(Math.sqrt(n));
	var flag = true;	
    for(var i=2;i <= limit;i++) {
      if (n % i === 0) {
        flag = false;
      }
    }

    return flag;
}