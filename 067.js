//Find the maximum total from top to bottom in triangle.txt 
//a 15K text file containing a triangle with one-hundred rows.
var fs = require('fs');
triangle = fs.readFileSync('p067_triangle.txt').toString().split('\n');

//consider the last row contains best sums.
var currentRow = triangle[triangle.length-2];
var pointer = triangle.length-2;
//move from bottom to top.
//assign best sum rows to the currentRow at each iteration.
//current row length narrows down at each iteration,
//and finally the length reduces to 1, and the greatest adjacent sum is found. 
while(currentRow.length != 1 && pointer > 0) {
	currentRow = simulateCurrent(triangle[pointer-1],currentRow);
	pointer--;
}
console.log(currentRow);

//from currentRow find greatest adjacent sum in left and right adjacency.
//   i
// j   k
//find max(i+j,i+k).
//do this for all i in previousRow.
function simulateCurrent(previousRow,currentRow) {
	previousArray = previousRow.split(" ");
	currentArray = currentRow.split(" ");

	var maxRow = '';
	for(var i=0;i<previousArray.length;i++) {
		var leftSum = parseInt(previousArray[i]) + parseInt(currentArray[i]);
		var rightSum = parseInt(previousArray[i]) + parseInt(currentArray[i+1]);
		maxRow += Math.max(leftSum,rightSum)+" ";
	}
	return maxRow;
}