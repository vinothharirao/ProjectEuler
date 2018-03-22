var n=1;
var done = false;
while(!done) {
	var triangularNumber = getNthTerm(n);
	if(noOfDivisors(triangularNumber) >= 500) {
		console.log(triangularNumber);
		done = true;
	}
	n++;
}
function getNthTerm(n) {
	return n*(n+1)/2;
}
function noOfDivisors(number) {
	var limit = number;
    var count = 0;

    if (number == 1) return 1;

    for ( i = 1; i < limit; ++i) {
        if (number % i == 0) {
            limit = number / i;
            if (limit != i) {
                count++;
            }
            count++;
        }
    }

    return count;
}