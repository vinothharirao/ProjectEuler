var BigNumber = require('bignumber.js');

var start = new BigNumber('1020304050607080900'); //lowest number in the given format
var end = new BigNumber('1929394959697989900'); //highest number in the given format

start = start.squareRoot(start).dividedBy(10);
end = end.squareRoot(end).dividedBy(10);

start = start.toFixed(0);
end = end.toFixed(0);

var i = new BigNumber(1);
i = i.times(end).plus(1);

for(;;i = i.minus(1)) {
	var s = new BigNumber(1);
	s = s.times(i);
	s = s.times(i);	
	s = s.times(100);

	var n = s.toString();
	n = n.split('.');
	
	if(is_valid(n[0])) break;	
}

console.log(i.times(10).toFixed(0));

function is_valid(str) {	
	var d = 1;	
	for(var i = 0;i < str.length;i += 2) {		
		if(str[i] != d) {			
			return false;
		}
		d = (d + 1) % 10;		
	}
	return true;
}