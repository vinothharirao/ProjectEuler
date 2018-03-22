var squares = [];
//pre generate squares from 0 to 1000.
generateSquares();
var max = 0,answer;
//check the no of solutions for all perimeters.
for(var p = 1;p <= 1000;p ++) {
  var temp = noOfSolutions(p);
  if(temp > max) {
    max = temp;
    answer = p;
  }
}
console.log(answer);

function noOfSolutions(perimeter) {
  var solutions = 0;
  for(var a = 1;a < perimeter - 1;a ++) {
    //only one side can be greater than perimeter/2.
    for(var b = a + 1;b < perimeter / 2;b ++) {
      csq = squares[a] + squares[b];
      if(csq == squares[perimeter - a - b]) solutions ++;
    }
  }
  return solutions;
}
function generateSquares() {
   for(var i = 0;i <= 1000;i ++) squares.push(i*i);
}