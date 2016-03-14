//to find smallest number divisible by 1 to 20
var i,done = false;
//the smallest number divisible by 1 to 10 is 2520(given in the problem).
for(i=2520;!done;i+=20) {
	//iterating from 11 through 19.Since mod 1 to 10 is included in 11 to 20.
	var j=11;	
	while(i%j == 0) {
		j++;
		if(j == 20) {
			console.log(i);
			done = true;
			break;
		}		
	}
	
}
