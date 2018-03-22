var fs = require('fs');
var m = fs.readFileSync('./p082_matrix.txt').toString();

m = m.split("\n");
var matrix = [];

for(var i = 0;i < m.length;i ++) {
	if(m[i] != '') matrix.push(m[i].split(","));
}
for(var i = 0;i < matrix.length;i ++) {
	for(var j = 0;j < matrix[i].length;j ++) {
		matrix[i][j] = parseInt(matrix[i][j]);		
	}	
}

var min = find_min(0);
for(var i = 1;i < matrix.length;i ++) {
	var t = find_min(i);	
	if(t < min) min = t;
}
console.log(min);

function find_min(start) {
	var path = [];
	for(var i = 0;i < matrix.length;i ++) {
		var t = [];
		for(var j = 0;j < matrix[i].length;j ++) {			
			t.push(-1);
		}
		path.push(t);
	}
	path[start][1] = matrix[start][0] + matrix[start][1];
	var q = [];
	q.push([start,1]);
	while(q.length != 0) {		
		var cur = q.shift();		
		var r = cur[0];
		var c = cur[1];
		if(r > 0) {
			if(path[r - 1][c] == -1) {
				path[r - 1][c] = path[r][c] + matrix[r - 1][c];
				q.push([r - 1,c]);
			} else {
				var t = path[r][c] + matrix[r - 1][c];
				if(t < path[r - 1][c]) {
					path[r - 1][c] = t;
					q.push([r - 1,c]);
				}
			}
		}
		if(r < matrix.length - 1) {
			if(path[r + 1][c] == -1) {
				path[r + 1][c] = path[r][c] + matrix[r + 1][c];
				q.push([r + 1,c]);
			} else {
				var t = path[r][c] + matrix[r + 1][c];
				if(t < path[r + 1][c]) {
					path[r + 1][c] = t;
					q.push([r + 1,c]);
				}
			}
		}
		if(c < matrix[0].length - 1) {
			if(path[r][c + 1] == -1) {
				path[r][c + 1] = path[r][c] + matrix[r][c + 1];
				q.push([r,c + 1]);
			} else {
				var t = path[r][c] + matrix[r][c + 1];
				if(t < path[r][c + 1]) {
					path[r][c + 1] = t;
					q.push([r,c + 1]);
				}
			}
		}
	}
	var min = path[0][path[0].length - 1];
	for(var i = 1;i < path.length;i ++) {
		var t = path[i][path[i].length - 1];
		if(t < min) min = t;
	}
	return min;
}