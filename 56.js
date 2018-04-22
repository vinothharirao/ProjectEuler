var BigNumber = require('bignumber.js');

var max = 0;

for(var a = 1;a < 100;a ++) {
	for(var b = 1;b < 100;b ++) {
		var pow = new BigNumber(a);
		pow = pow.pow(b);
		var s = sum(pow.toFixed(0));
		if(s > max) {
			max = s;			
		}
	}
}

console.log(max);

function sum(n) {
	var s = 0;
	for(var i = 0;i < n.length;i ++) s += parseInt(n[i]);
	return s;
}