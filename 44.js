var prev = 1;

var found = false;
var min = -1;

for(var n = 2;;n ++) {		
	var pn = pent(n);
	if(found) break;
	for(var i = 1;i < n;i ++) {
		var pi = pent(i);
		var sum = pi + pn;
		var diff = pn - pi;
		if((diff < min || min == -1) && is_pent(sum) && is_pent(diff)) {
			min = diff;
			found = true;
		}
	}
}
console.log(min);

function is_pent(p) {	
	var a = 3;
	var b = -1;
	var c = -2 * p;
	var r1 = (-b + Math.sqrt((b * b) - 4 * a * c)) / (2 * a);
	var r2 = (-b - Math.sqrt((b * b) - 4 * a * c)) / (2 * a);	
	if(is_root(r1) || is_root(r2)) return true;
	return false;
}
function pent(n) {	
	return n * (3 * n - 1) / 2;	
}
function is_root(n) {
	if(n < 0) return false;
	if(n == parseInt(n)) return true;
	return false;
}