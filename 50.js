primes = [];
var max = 0;
var res;

for(var i = 0;i < 1000000;i ++) {
	if(is_prime(i)) {
		primes.push(i);
	}
}

for(var i = primes.length - 1;i >= 0;i --) {
	var p = primes[i];
	var c = consec(p);
	if(c > max) {
		res = p;
		max = c;		
	}
}

console.log(res);

function consec(p) {
	var len = 0;
	var sum = 0;
	var m1 = 0,m2 = 0;
	for(var i = 0;i < primes.length;i ++) {
		sum += primes[i];
		len ++;
		if(sum > p) break;
		if(sum == p) {
			m1 = len;
		}
	}
	for(var i = 0;i < primes.length;i ++) {
		sum -= primes[i];
		len --;
		if(sum < p) break;
		if(sum == p) {
			m2 = len;
		}
	}
	return (m1 > m2) ? m1 : m2;
}

function is_prime(n) {
	if(n < 2) return false;
	if(n == 2) return true;
	if(n % 2 == 0) return false;
	for(var i = 3;i <= Math.sqrt(n);i += 2) {
		if(n % i == 0) return false;
	}
	return true;
}