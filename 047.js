//Find the first four consecutive integers to have four distinct prime factors. What is the first of these numbers?
//runs in 14 seconds,needs optimization.
var num = 0,yet = 3,found = true;
var prime = [],distinct = [];
while(true) {
	found = true;
	if(yet > 0) found = false;	
	if(!isDistinct(num)) {
		yet = 3;
		found = false;
	} else yet --;	
	
	if(found) break;
	num++;
}
console.log(num-3);

function isDistinct(n) {
	if(distinct[n] == true) return true;
	else if(distinct[n] == false) return false;
	if(isPrime(n)) {
		distinct[n] = false;
		return false;
	}
	var divisors = new Set();
	if(n % 2 == 0) divisors.add(2);
	for(var i = 3;i <= n/2;i += 2) {
		if(n % i == 0) if(isPrime(i)) divisors.add(i);
	}
	if(divisors.size >= 4) {		
		distinct[n] = true;
		return true;
	}
	distinct[n] = false;
	return false;
}
function isPrime(n) {
	if(prime[n] == true) return true;
	else if(prime[n] == false) return false;
	if(n < 2) return false;
	if(n > 2 && n%2 == 0) {
		prime[n] = false;
		return false;
	}
	for(var i = 3;i<=Math.sqrt(n);i += 2) {
		if(n%i == 0) {
			return false;
			prime[n] = false;
		}
	}
	prime[n] = true;
	return true;
}