var upperBound = 28123;
var abundants = [];
for(var i = 1;i <= upperBound;i ++) {
  if(isabundant(i)) abundants.push(i);
}
var sum = 0;
var possibles = new Set();
for(var i = 0;i < abundants.length;i ++) {
  for(var j = i;j < abundants.length;j ++) {
    var temp = abundants[i] + abundants[j];
    if(temp <= upperBound) possibles.add(temp);
  }
}
for(var item of possibles) sum += parseInt(item);
var sumofall = upperBound * ((upperBound+1)/2);
console.log(sumofall - sum);

function isabundant(num) {
  var sum = 0;
  for(var i = 1;i <= num/2;i ++) {
    if(num % i == 0) sum += i;
  }
  return (sum > num);
}