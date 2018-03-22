//largest prime that divides 600851475143
var number = 600851475143;
var prime = 2;

for(;prime<number;) {
  if(number%prime == 0) {
  	number = number/prime;
  }
  //any number can be written as product of primes.
  prime++;
}
console.log(prime);