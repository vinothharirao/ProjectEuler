//How many circular primes are there below one million?
var count = 1;
for(var i = 1;i<1000000;i+=2) {
	for(var j=0;j<10;j+=2) if((i+"").indexOf(j) > -1) continue;
	if(isPrime(i) && isCircularPrime(i)) count ++;
}
console.log(count);

function isCircularPrime(n) {
	var rotations = rotate((n+"").split(""));
	for(var i=0;i<rotations.length;i++) {
		var item = combine(rotations[i]);		
		if(!isPrime(item)) {			
			return false;			
		}
	}
	return true;
}
function combine(set) {
	var num = '';
	for(var i = 0;i<set.length;i++) num += set[i];
	return parseInt(num);
}
function isPrime(n) {
	if(n < 2) return false;
	for(var i=2;i<=Math.sqrt(n);i++) {
		if(n%i == 0) return false;
	}
	return true;
}
function rotate(set) {
  var rotations = [],rotate=set;
  for(var i = 0;i<set.length-1;i++) {
  	rotate = rotateOnce(rotate);
  	rotations.push(rotate);
  }
  return rotations;
};
function rotateOnce(set) {
	var result = [];
	result.push(set[set.length-1]);
	for(var i = 0;i<set.length-1;i++) result.push(set[i]);
	return result;
}