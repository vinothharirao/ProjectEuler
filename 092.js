//How many starting numbers below ten million will arrive at 89?
var count = 0;
for(var i = 1;i<10000000;i++) {
  if(arrives(i)) count ++;
}
console.log(count);
function arrives(n) {
  var number = n;
  while(true) {
    number = next(number);
    if(number == 89) return true;
    else if(number == 1) return false;
  }
}
function next(n) {
  var sum = 0;
  while(n) {
    sum += Math.pow(n%10,2);
    n = Math.floor(n/10);
  }
  return sum;
}