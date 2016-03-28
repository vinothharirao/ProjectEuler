//Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
var sum = 0;
for(var i = 0;i<1000000;i++) {
	if((isPalindrome(i))&&(isPalindrome(dec2bin(i)))) sum += i;
}
console.log(sum);

function isPalindrome(num) {
	var reverse = (num+"").split('').reverse().join('');
	if(reverse == num+'') return true;
	return false;
}
function dec2bin(dec){
    return (dec >>> 0).toString(2);
}