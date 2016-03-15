//How many routes are there through a 20×20 grid?
var routes = 0;
console.log(computeRoutes(20));

function computeRoutes(gridLength) {
	noOfTiles = gridLength * 2;
	//a grid contains nCr possible paths.n->no of Tiles;r->length of any row/column.
	return combinations(noOfTiles,gridLength);
}
//nCr = n!/((n-r)!r!)
function combinations(n,r) {
	return (Factorial(n)/((Factorial(n-r))*(Factorial(r))));
}
function Factorial(n) {
	if(n == 1) return 1;
	return n*Factorial(n-1);
}