/*
Given is the function f(x) = ⌊2^30.403243784-x^2⌋ × 10^-9 ( ⌊ ⌋ is the floor-function),
the sequence un is defined by u0 = -1 and un+1 = f(un).

Find un + un+1 for n = 1012.
Give your answer with 9 digits after the decimal point.
*/

var results = [2]; //sliding window of previous and current u(n).
//doing in iterative way.
function un(n) {
	results[0] = -1;
	results[1] = fx(results[0]);	
	for(var i = 2;i <= n;i ++) {				
		results[0] = results[1];
		results[1] = fx(results[0]);
	}
	return results[1];
}

//⌊2^30.403243784-x^2⌋ × 10^-9
function fx(x) {
	var pow = 30.403243784 - (x * x);
	pow = Math.pow(2,pow);
	pow *= Math.pow(10,-9);
	return pow;
}

var u_n = un(Math.pow(10,3));

var res = u_n + fx(u_n);

var d = Math.pow(10,9);
console.log((parseInt(res * d) / d).toFixed(9));