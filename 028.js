//What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral.

//spiral length
var n = 1001;
//maximum value of spiral
var max = n * n;

var sum = 1,diff = 2,nc = 1;
while(true) {
	//sum up the corners of the square.
	for(var i = 0;i < 4;i ++) {				
		nc += diff;
		sum += nc;		
	}
	if(nc >= max) break;	
	//expand square size for every iteration.
	diff += 2;
}
console.log(sum);