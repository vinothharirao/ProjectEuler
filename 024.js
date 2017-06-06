//What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

var perm = 1000000;

//permutation set.
var arr = [0,1,2,3,4,5,6,7,8,9];
var factorials = [];
var max = arr.length - 1;
var res = [];

//find factorials of all possible numbers.
for(var i = 0;i < arr.length;i ++) {
	factorials[i] = fact(i);
}
//using factorial number system.
while(true) {
	var f = factorials[max];		
	var cnt = 0;
	while(true) {
		if(perm > f) {
			perm -= f;
			cnt ++;
		}
		else break;		
	}		
	
	res.push(arr[cnt]);
	arr = remove(arr,cnt);	
	
	if(max >= 0) max --;
	if(max == -1) break;
}
console.log(res.join(''));

//factorial of a number.
function fact(i) {
	if(i == 0 || i == 1) return 1;	
	return i * factorials[i - 1];
}
//to remove a particular element from an array.
function remove(arr,index) {
	for(var i = index;i < arr.length - 1;i ++) arr[i] = arr[i + 1];
	arr.pop();
	return arr;
}