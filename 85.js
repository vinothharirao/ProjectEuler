var found = false;

var ub = calc_ub(2000000);

var diff = ub;
var r,c;

for(var i = 1;i <= ub;i ++) {
	for(var j = 1;j <= ub;j ++) {		
		var rects = get_rects(i,j);
		var d = Math.abs(2000000 - rects);
		if(d < diff) {
			diff = d;
			r = i;
			c = j;
		}
	}	
}

console.log(r * c);

function get_rects(r,c) {
	return (c * (c + 1) / 2) * (r * (r + 1) / 2);	
}

function calc_ub(n) {
	var a = 1;
	var b = 1;
	var c = -2 * n;
	var res = -b + Math.sqrt((b * b) - (4 * a * c));
	return Math.floor(res / (2 * a));
}