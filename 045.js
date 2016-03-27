//Find the next triangle number that is also pentagonal and hexagonal after 40755.
for(var n=144;;n++) {
	var h = getHexagonal(n);
	if(isTriangular(h,n) && isPentagonal(h,n)) {
		console.log(h);
		break;
	}
}
function isTriangular(num) {
	var n = Math.floor(Math.sqrt(num*2));
	if(getTriangular(n) == num) return true;
	return false;
}
function isPentagonal(num) {
	var n = Math.floor(Math.sqrt(num));
	for(var i = 1;i <= n;i++) if(getPentagonal(i) == num) return true;
	return false;
}
function getTriangular(n) {
	return n*(n+1)/2;
}
function getPentagonal(n) {
	return n*(3*n-1)/2;	
}
function getHexagonal(n) {
	return n*(2*n-1);
}