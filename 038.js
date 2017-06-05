//What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

var res = 0;
	
//maximum possible value for num is 9999.
//since from 5 digits no pandigital can be formed by multiplying with n = 1,2,3..
//the only possible number greater than 9999 is 123456789 and n = 1.
for(var num = 1;num < 9999;num ++) {
	var c = '';	
	for(var n = 1;;n ++) {
		c += n * num;		
		if(isPan(c)) {			
			if(parseInt(c) > parseInt(res)) {
				res = c;				
			}
		}
		if(c.length > 9) break;
	}
}
console.log(res);

function isPan(n) {
	if(n.length != 9) return false;
	n = n.split('').sort(function(a,b) { 
		return parseInt(a) - parseInt(b); 
	});	
	for(var i = 1;i <= n.length;i ++) {
		if(parseInt(n[i - 1]) != i) return false;
	}
	return true;
}