var sum = 0;
var products = [];

for(var i = 1;i < 9999;i ++) { //10000 * 2 = 20000 -> 12 digits
	for(var j = 1;j < 999;j ++) {
		var p = i * j;
		if(is_added(p)) continue;
		if(is_pan(i,j,p)) {			
			products.push(p);
			sum += p;			
		}
	}
}

console.log(sum);

function is_added(n) {
	for(var i = 0;i < products.length;i ++) {
		if(products[i] == n) return true;
	}
	return false;
}
function is_pan(a,b,p) {
	var d = [0,1,2,3,4,5,6,7,8,9];	
	if(!check_digits(p,d)) return false;
	if(!check_digits(a,d)) return false;
	if(!check_digits(b,d)) return false;

	for(var i = 0;i < d.length;i ++) {
		if(d[i] != 0) return false;
	}
	return true;
}
function check_digits(a,d) {
	while(a != 0) {
		var n = a % 10;
		a = parseInt(a / 10);
		if(d[n] != 0) d[n] = 0;
		else return false;
	}
	return true;
}