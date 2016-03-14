//to find largest palindrome that is a product of two 3 digit numbers.

var answer=0;
for(var i=999;i>=100;i--) {
	for(var j=999;j>=i;j--) {
		var product = (i*j)+"";
		//check palindrome.
		if((product) === (product).split("").reverse().join("")) {
			if((i*j)>answer) answer=(i*j);
		}		
	}
}
console.log(answer);