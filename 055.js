//How many Lychrel numbers are there below ten-thousand?
var count = 0;
console.log(isLychrel(4994));
for(var i=0;i<=10000;i++) {
	if(isLychrel(i)) count ++;
}
console.log(count);

function isLychrel(num) {
	var n = num;
	for(var i=0;i<50;i++) {
		var pal = addReverse(n);
		if(isPalindrome(pal)) return false;
		else n = pal;
	}
	return true;
}
function addReverse(n) {
	return n+parseInt((n+'').split('').reverse().join(''));
}
function isPalindrome(n) {
	return ( (n+'') == (n+'').split('').reverse().join('') );
}