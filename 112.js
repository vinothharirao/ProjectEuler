//Find the least number for which the proportion of bouncy numbers is exactly 99%.
var count = 0,percent = 0;
for(var i = 0;;i++) {
	if(isBouncing(i+'')) count ++;
	percent = count/i;
	if(percent == 0.99) break;
}
console.log(i);

function isBouncing(n) {
	var digits = n.split('');
	var increasing = false,decreasing = false;
	for(var i = 0;i < digits.length-1;i++) {
		if(increasing && decreasing) return true;
		var difference = parseInt(digits[i+1]) - parseInt(digits[i]);
		if( difference > 0 ) increasing = true;
		else if( difference < 0 ) decreasing = true;
	}
	if(increasing && decreasing) return true;
	return false;
}