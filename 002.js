//to find sum of even fibonacci sequence whose value doesnt exceed 4 million
var sum = 0;

var fibCurrent = 2;
var fibPrevious = 1;
var buffer;
while(fibCurrent < 4000000) {
	if(fibCurrent%2 == 0) sum += fibCurrent;
	buffer = fibCurrent;
	//fibo(n) = fibo(n-1)+fibo(n-2)
	fibCurrent += fibPrevious;
	fibPrevious = buffer;
}
console.log(sum);