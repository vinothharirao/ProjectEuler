//how many are triangle words?
var fs = require('fs');
var words = fs.readFileSync('p042_words.txt').toString().replace(/"/g, '').split(",");
var count = 0;
console.log(words[9]);
for(var i = 0;i < words.length;i++) {
	if(isTriangle(words[i])) count ++;
} 
console.log(count);

function isTriangle(word) {
	var sum = 0;
	for(var i=0;i<word.length;i++) sum += charToNum(word[i]);
	var n = Math.floor(Math.sqrt(2*sum));
	if(sum == getTriangle(n)) return true;
	return false; 
}
function getTriangle(n) {
	return (0.5)*(n)*(n+1);
}
function charToNum(c) {
	return c.charCodeAt(0)-64;
}