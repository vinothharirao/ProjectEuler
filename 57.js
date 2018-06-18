var iter = 1000;
var sum = 0;
var thirteens = Math.floor(iter / 13);
sum += thirteens * 2; //it occurs twice for every thirteen numbers. first after 8 and second after 5 iterations.
sum += (iter % 13) > 8 ? 1 : 0;
console.log(sum);

//solution ends here.

//following snippet shows first 50 iterations to verify the pattern.
//set verify = 1 to enable the iterations.
var verify = 0;

var BigNumber = require('bignumber.js');

var start = "1";
var previous = [1,1];
var count = 0;

var iter = 0;
var max_iters = 50;

if (!String.prototype.padEnd) {
    String.prototype.padEnd = function padEnd(targetLength,padString) {
        targetLength = targetLength>>0; //floor if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return String(this) + padString.slice(0,targetLength);
        }
    };
}

if(verify) {
	console.log("+----------------------------------------------------------------------+");
	console.log("| numerator".padEnd(23),"| denominator".padEnd(23),"| greater/lesser       |");
	console.log("+----------------------------------------------------------------------+");
	nextItem(); 
}

function nextItem() {
    iter ++;    

    if (iter < max_iters) {    	
    	once(start,function(str) {
    		start = str;    		
    		setTimeout(nextItem, 0);
    	});
    } else {
    	console.log("+----------------------------------------------------------------------+");
    }
}

function once(str,cb) {		
	var n = expand();	
	var result = [];
	evaluate(n,function(result) {		
		previous[0] = result[0];
		previous[1] = result[1];
		if(result[0].length > result[1].length) {			
			count ++;
		}		
		console.log(("| " + result[0]).padEnd(23),
					("| " + result[1]).padEnd(23),
					"|",(result[0].length > result[1].length) ? "greater".padEnd(20) : "lesser".padEnd(20),"|");
		cb(n);
	});
}

function expand() {
	var res = '(1+1/';
	var p = previous[0] - previous[1];
	var tp = p + '/' + previous[1];
	if(p != 0) res += '(2+' + tp + '))';
	else res += '2)';
	return res;


	var temp = '';
	for(var i = str.length - 1;i >= 0;i --) {
		if(str[i] != ')') break;
	}
	for(var j = 0;j < i;j ++) {
		temp += str[j];		
	}
	var e = '(' + str[i] + '+1/2)';
	temp += e;
	for(var j = i + 1;j < str.length;j ++) temp += str[j];
	return temp;
}

function evaluate(f,cb) {
	var t = f;
	t = t.replace(new RegExp('\\[','g'),'');
	t = t.replace(new RegExp('\\]','g'),'');

	t = t.split('/');

	if(t.length == 2) {
		if(t[0].indexOf("/") <= -1 && t[0].indexOf("+") <= -1)
			if(t[1].indexOf("/") <= -1 && t[1].indexOf("+") <= -1)
				return cb([t[0],t[1]]);
	}

	for(var i = 0;i < f.length;i ++) {
		if(f[i] == '(') {
			var o = i;
			while(f[i] != ')') {
				if(f[i] == '(') o = i;
				i ++;
			}
			var c = i;
			var s = simplify(f,o,c);			
			var temp = '';
			for(var j = 0;j < o;j ++) temp += f[j];
			temp += s;
			for(var j = c + 1;j < f.length;j ++) temp += f[j];
			f = temp;
			break;
		}
	}
	setTimeout(evaluate,0,f,cb);
}

function simplify(str,o,c) {
	o ++;
	c --;
	var temp = '';
	for(var i = o;i <= c;i ++) temp += str[i];	
	temp = temp.split('+');
	var o1 = temp[0];
	var o2 = operands(temp[1],'/');
	var f = fraction(o2[1]);

	//console.log(str,o1,o2)	
	
	o2[0] = new BigNumber(o2[0]);
	o2[0] = o2[0].times(f[1]);
	o2[1] = new BigNumber(f[0]);

	var num = new BigNumber(o1).times(o2[1]).plus(o2[0]);
	var den = o2[1];

	return '[' + num.toString() + '/' + den.toString() + ']';
}

function fraction(str) {
	var n,d = 1;	
	str = str.replace('[',"");
	str = str.replace(']',"");

	str = str.split('/');
	if(str[1]) d = str[1];
	n = str[0];
	return [n,d];
}

function operands(str,op) {
	var a = '',b = '';
	for(var i = 0;i < str.length;i ++) {
		if(str[i] == op) break;
		a += str[i];		
	}
	for(var j = i + 1;j < str.length;j ++) {
		b += str[j];
	}
	return [a,b];
}