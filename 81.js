var fs = require('fs');
var mf = fs.readFileSync('./p081_matrix.txt');
mf = mf.toString();
mf = mf.replace(new RegExp('\n','g'),',');
mf = mf.split(',');

var len = 80;
var matrix = [];
var path = [];
var c = 0;

for(var i = 0;i < len;i ++) {
	var r = [];
	var p = [];
	for(var j = 0;j < len;j ++) {		
		r.push(parseInt(mf[c]));
		c ++;
		p.push(-1);
	}
	matrix.push(r);
	path.push(p);
}

for(var i = 0;i < len;i ++) {
	for(var j = 0;j < len;j ++) {
		var min = -1;
		if(i > 0 && j > 0) min = Math.min(path[i - 1][j],path[i][j - 1]);
		else if(i > 0) min = path[i - 1][j];
		else if(j > 0) min = path[i][j - 1];
		
		if(min == -1) path[i][j] = matrix[i][j];
		else path[i][j] = min + matrix[i][j];		
	}
}

console.log(path[len - 1][len - 1]);