//find a.b.c given a+b+c = 1000,.given a,b,c is a Pythagorean triplet.
var found = false;
var factorA = 1;
var factorB = 1;
//iterating through squares of natural numbers.
for(var asqr=1;!found ; asqr = factorA*factorA) {
	factorB = 1;
	//largest possible square is 100000 since a,b,c can take value in [1,1000]
	for(var bsqr=1;bsqr<100000 && !found ; bsqr = factorB*factorB) {
		var csqr = asqr + bsqr;
		if(factorA + factorB + Math.sqrt(csqr) == 1000) {
			console.log(factorA * factorB * Math.sqrt(csqr));
			found = true;
		}
		factorB++;
	}
	factorA++;
}