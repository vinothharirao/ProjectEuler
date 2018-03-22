//Evaluate the sum of all the amicable numbers under 10000.
var num = 220;
var sum = 0;

for(var i=2;i<=10000;i++) {
	if(isAmicable(i)) sum += i;
}
console.log(sum);

//if d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair 
//where d(a) is the sum of all divisors of a.
function isAmicable(n) {
	var sum = sumOfDivisors(n);
	if(n == sumOfDivisors(sum) && n != sum) return true;
	else return false;
}
function sumOfDivisors(n) {
	//any number is divisible by 1.
	var sum = 1;
	for(var i = 2;i <= n/2;i++) {
		if(n % i == 0) {
			sum += i;
		}
	}
	return sum;
}