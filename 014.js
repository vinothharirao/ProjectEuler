//Which starting number, under one million, produces the longest collatz chain?
var longest = 1;
var chainLength = 1;
//check lengths for all numbers under 1 million
for(var i=1;i<1000000;i++) {
	var temp = getChainLength(i);
	if(temp > chainLength) {
		chainLength = temp;
		longest = i;
	}
}
console.log(longest);
//generates the collatz chain length for any given number
function getChainLength(number) {
	var length = 1;
	while(number != 1) {
		if(number%2 == 0) number=number/2;
		else number=3*number+1;
		length++;
	}
	return length;
}
console.timeEnd("v");