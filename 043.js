//Find the sum of all 0 to 9 pandigital numbers with this property.
var permArr = [],
  usedChars = [];
var sum = 0;

var digits = [];
var primes = [2,3,5,7,11,13,17];
for(var i=0;i<10;i++) digits[i] = i;
var result = permute(digits);
console.log(result);

function sumUp(current,permutation) {
  var number = 0;
  for(var i = permutation.length-1;i>=0;i--) {
    number += permutation[i] * Math.pow(10,permutation.length-1-i);    
  }
  return current + number;
}
function checkDivisible(permutation) {
  var pointer = 4;
  if( (permutation[3] % 2 != 0) || (permutation[5] % 5 != 0) ) return false;
  if( (permutation[2]+permutation[3]+permutation[4])%3 != 0) return false;
  while(pointer < 8) {
    if( !((permutation[pointer]*100 + permutation[pointer+1]*10 + permutation[pointer+2]) % primes[pointer-1] == 0) ) return false;
    pointer ++;
  }
  return true;
}
function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      var item = usedChars.slice();
      if(checkDivisible(item)) {
        sum = sumUp(sum,item);        
      }      
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }  
  return sum;
};