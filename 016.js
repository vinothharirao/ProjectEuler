//js supports only IEEE 754 integers, hence maximum 53bit integers can be used.
//2 power 1000 requires 64 bit integer.
//hence using big number library.
//if you use html add a script tag to include big-number.js library, to the relative path /node_modules/big-number/lib/big-number.js

var BigNumber = require('big-number');
//remove above line in html


var number = BigNumber(2).power(1000);
var sum = 0;
for(var i=0;i<number.number.length;i++) {
	sum += number.number[i];
}
console.log(sum);