var max = findRecurrLength(2);
var answer = 2;
for(var d = 3;d < 1000;d ++) {
  var len = findRecurrLength(d);
  if(len > max) {
    answer = d;
    max = len;
  }
}
console.log(answer);

function findRecurrLength(divisor) {
  var recurlen = 0,rem = 10;
  var remainders = [];
  while(true) {
    if(lookup(remainders,rem / divisor)) return recurlen;
    remainders.push(rem / divisor);
    recurlen ++;
    if(rem % divisor == 0) {
      return 0;
    }
    rem = (rem % divisor) * 10;
  }
}
function lookup(array,elem) {
  for(var i = 0;i < array.length;i ++) {
    if(array[i] == elem) return true;
  }
  return false;
}