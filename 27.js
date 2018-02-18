/*
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0
*/

var ab;
var max = 0;
for(var b = 0;b <= 1000;b ++) { //no need to check for b = (-1000 to 0);since n^2+an+b produces non prime for n = 0;
	for(var a = -1000;a < 1000;a ++) {
		if(check_ab(a,b)) {
			var cur_max = consec(a,b);
			if(cur_max > max) {
				max = cur_max;
				ab = a * b;
			}
		}
	}
}
console.log(ab);

function consec(a,b) {
	var res = 0;
	for(var n = 0;;n ++) {
		var p = evaluate(a,b,n);
		if(is_prime(p)) res ++;
		else return res;
	}
}
function evaluate(a,b,n) {
	return (n * n) + (a * n) + b;
}
function check_ab(a,b) { //check if a and b are valid for n = 0 and 1.
	if(!is_prime(b)) return false;
	var temp = 1 + a + b;
	if(!is_prime(temp)) return false;
	return true;
}

function is_prime(n) {
	if(n <= 1) return false;
	if(n == 2) return true;
	if(n % 2 == 0) return false;
	for(var i = 3;i <= Math.sqrt(n);i ++) {
		if(n % i == 0) return false;
	}
	return true;
}