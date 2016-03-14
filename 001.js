//to find sum of terms divisible by 3 and 5, below 1000.

//method 1:using arithmetic progression and inclusion exclusion principle.
//given set:{0,1,..,999}.. => 1000 elements.
var noOfElements = 1000;

//Sn = (n/2)[2a+(n-1)d]
//no of terms divisble by k below n = Ceiling[k/n] 
var n = Math.ceil(noOfElements/3);
sumOfThrees = Math.floor((n/2)*(3*n-3));

n = Math.ceil(noOfElements/5);
sumOfFives = Math.floor((n/2)*(5*n-5));

n = Math.ceil(noOfElements/15);
sumOfFifteens = Math.floor((n/2)*(15*n-15));

//A ∪ B = A + B - (A ∩ B)
console.log((sumOfThrees+sumOfFives-sumOfFifteens));

//method 2:straightforward approach.iterating from 1 to 999.
var sum = 0;
var number = 1;
while(number<1000) {
	if(number % 3 == 0 || number % 5 == 0)
	     sum += number;
	number++;
}
console.log(sum);