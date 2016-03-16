//f all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
var noOfLetters = 0;
//convert all numbers to letters and find out length.Sum it up.
for(var i=1;i<=999;i++) {
	noOfLetters += numberToText(i).length;
}
//for onethousand add 11.
console.log(noOfLetters+11);

function ones(n) {
	var text = ['','one','two','three','four','five','six','seven','eight','nine'];	
	return text[n];
}
function tens(n) {
	var text = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
	return text[n];
}
function teens(n) {
	var text = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
	return text[n];
}
function hundreds(n) {
	if(n != 0)
		return ones(n)+'hundred';
	else return ''; 
}
function numberToText(number) {	
	if(number%100 == 0) return hundreds(number/100);
	else if(number>100) {
		if(number % 100 > 10 && number % 100 < 20) 
			return (hundreds(Math.floor(number/100))+'and'+teens(Math.floor(number%100%10)));
		else 
			return (hundreds(Math.floor(number/100))+'and'+tens(Math.floor(number%100/10))+ones(number%10));
	}
	else {
		if(number > 10 && number < 20) 
			return (teens(Math.floor(number%100%10)));
		else 
			return (tens(Math.floor(number%100/10))+ones(number%10));
	}
}
