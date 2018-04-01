var max = 50 * 1000000;
var ub = Math.pow(max,1 / 2);

var squares = [];
var cubes = [];
var pow_fours = [];

for(var i = 0;i <= ub;i ++) {
	if(is_prime(i)) {
		var s = i * i;
		squares.push(s);
		cubes.push(s * i);
		pow_fours.push(s * s);
	}
}

var res = new Object();
var total = 0;

for(var i = 0;i < pow_fours.length;i ++) {
	for(var j = 0;j < cubes.length;j ++) {
		var t = cubes[j] + pow_fours[i];	
		if(t > max) continue;	
		for(var k = 0;k < squares.length;k ++) {
			var sum = t + squares[k];
			if(sum < max) {				
				if(res[sum] == undefined) total ++;
				res[sum] = true;
			}
		}
	}
}

console.log(total);

function is_prime(n) {
	if(n < 2) return false;
	if(n == 2) return true;
	if(n % 2 == 0) return false;
	for(var i = 3;i <= Math.sqrt(n);i += 2) {
		if(n % i == 0) return false;
	}
	return true;
}
function insert(q,n) {
	if(q.length == 0) {
		q.push(n);
		return q;
	}
	var a = [];
	for(var i = 0;q[i] < n;i ++) {
		a.push(q[i]);
	}
	if(q[i] == n) return q;
	a.push(n);
	for(;i < q.length;i ++) {
		a.push(q[i]);
	}
	return a;
}