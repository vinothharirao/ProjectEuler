//problem 62 :
/*The cube, 41063625 (3453), can be permuted to produce two other cubes: 56623104 (3843) and 66430125 (4053). In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.

Find the smallest cube for which exactly five permutations of its digits are cube.*/

//starting from smallest number.
var n = 0;

//create a map of digits with numbers whose cube is a permutation of this digits.
var map = new Object();
while(true) {
	n ++;
	nc = n * n * n;
	//sort all cubes so that we can find ones that are permutation of same digit set.
	nc = (nc + "").split("").sort().join("");		
	if(map[nc] == undefined) {
		map[nc] = [n];
	} else {
		map[nc].push(n);
	}
	//solution found.
	if(map[nc].length == 5) {
		map[nc] = map[nc].sort(function(a,b) {
			return a-b;
		});
		//minimum cube is the cube of minimum number.
		var c = map[nc][0];
		console.log(c * c * c);
		break;
	}
}