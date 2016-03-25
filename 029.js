//set removes repetition.
var powers = new Set();
var BigNumber = require('big-number');

var a = 100,b = 100;
for(var i = 2;i <= a; i++) {
	for(var j = 2;j <= b; j++) {
		powers.add(new BigNumber(i).power(j).number + "");
	}
}

console.log(powers.size);