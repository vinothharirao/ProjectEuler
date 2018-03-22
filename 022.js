//What is the total of all the name scores in the file?
var fs = require('fs');
var names = fs.readFileSync('p022_names.txt').toString().split(",");

names.sort();
console.log(totalScore(names));

//sum all scores.
function totalScore(names) {
	var total = 0;
	for(var i = 0;i<names.length;i++) {
		total += score(names[i],i+1);
	}
	return total;
}
//find score of a given string.
function score(name,rank) {
	var sum = 0;
	//discard start of and end of string characters.
	for(var i=1;i<name.length-1;i++) {
		sum += (name[i].charCodeAt(0))-64;
	}
	return sum * rank;
}