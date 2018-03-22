//If dn represents the nth digit of the fractional part, find the value of the following expression.
//d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
var num = '';
for(var i = 0;i < 1000000; i++) num += i;
var product = 1;
for(var i = 10;i <= 1000000; i *= 10) {
	product *= parseInt(num[i]);
}

console.log(product);