//Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
var number = 1;
var success = 0;
var found = false;
while(true) {
	if(check(number+"")) break;
	number ++;
}
console.log(number);

function check(n) {
	var sorted = (n).split('').sort().join('');
	var valid = true;
	for(var i=2;i<=6;i++) {
		var current = (n*i+'').split('').sort().join('');
		if(current != sorted) {
			valid = false;
			break;
		}
	}
	return valid;
}