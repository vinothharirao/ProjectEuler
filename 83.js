var fs = require('fs');
var m = fs.readFileSync('./p083_matrix.txt').toString();

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

var path = [];
for(var i = 0;i < matrix.length;i ++) {
	var t = [];
	for(var j = 0;j < matrix[i].length;j ++) {			
		t.push(-1);
	}
	path.push(t);
}

var start = 0;

path[start][1] = matrix[start][0] + matrix[start][1];
path[start + 1][0] = matrix[start][0] + matrix[start + 1][0];
var q = [];
q.push([start,1]);
q.push([start + 1,0]);	
while(q.length != 0) {		
	var cur = q.shift();
	var r = cur[0];
	var c = cur[1];
	//console.log(r,c);
	if(r > 0) {
		move(r,c,r - 1,c);			
	}
	if(c > 0) {
		move(r,c,r,c - 1);			
	}
	if(r < path.length - 1) {
		move(r,c,r + 1,c);			
	}
	if(c < path[0].length - 1) {
		move(r,c,r,c + 1);			
	}
}
var min = path[path.length - 1][path[0].length - 1];

console.log(min);

function move(r,c,move_r,move_c) {
	var t = matrix[move_r][move_c] + path[r][c];
	if(path[move_r][move_c] == -1) {
		path[move_r][move_c] = t;
		q.push([move_r,move_c]);
	} else {
		if(t < path[move_r][move_c]) {
			path[move_r][move_c] = t;
			q.push([move_r,move_c]);
		}				
	}
}