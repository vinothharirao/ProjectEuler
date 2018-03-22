//Find the maximum total from top to bottom of the triangle below:
var triangle = ['75',
				'95 64',
				'17 47 82',
				'18 35 87 10',
				'20 04 82 47 65',
				'19 01 23 75 03 34',
				'88 02 77 73 07 63 67',
				'99 65 04 28 06 16 70 92',
				'41 41 26 56 83 40 80 70 33',
				'41 48 72 33 47 32 37 16 94 29',
				'53 71 44 65 25 43 91 52 97 51 14',
				'70 11 33 28 77 73 17 78 39 68 17 57',
				'91 71 52 38 17 14 91 43 58 50 27 29 48',
				'63 66 04 68 89 53 67 30 73 16 69 87 40 31',
				'04 62 98 27 23 09 70 98 73 93 38 53 60 04 23'];

//consider the last row contains best sums.
var currentRow = triangle[triangle.length-1];
var pointer = triangle.length-1;
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