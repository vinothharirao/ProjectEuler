//What 12-digit number do you form by concatenating the three terms in 4digit increasing prime sequence?
var primes = [];
var diff = 0;
for(var i=1001;i<=9999;i+=2) {
  if(isPrime(i)) primes.push(i);
}
for(var i=0;i<primes.length-1;i++) {
  for(var j=i+1;j<primes.length;j++) {
    diff = primes[j] - primes[i];
    next = primes[j] + diff;
    if(isPrime(next) && next < 10000 && diff == 3330) {
      if(isPermutations(primes[i],primes[j],next)) console.log(primes[i]+""+primes[j]+""+(primes[j]+diff));
    }
  }
}

function isPermutations(a,b,c) {
  a = (a+"").split("").sort().join(""); 
  b = (b+"").split("").sort().join("");
  c = (c+"").split("").sort().join("");
  if(a == b && b == c) return true;
  return false;
}
function isPrime(n) {
  for(var i=2;i<=Math.sqrt(n/2);i++) {
    if(n % i == 0) return false;
  }
  return true;
}