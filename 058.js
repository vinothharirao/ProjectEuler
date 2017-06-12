//what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10%?

var add = 2,
    st = 1,
    total = 1,
    primes = 0,
    len = 1;
while(true) {
    len += 2;
    //generate one spiral
    for(var i = 1;i <= 4;i ++) {
        st += add;
        total ++;
        if(isPrime(st)) primes ++;
    }
    add += 2;    
    var percent = primes / total;
    percent *= 100;    
    
    if(percent < 10) {        
        console.log(len);
        break;
    }
}

function isPrime(n) {
    if(n == 2) return true;
    if(n % 2 == 0) return false;
    for(var i = 3;i <= Math.sqrt(n);i ++) {
        if(n % i == 0) return false;
    }
    return true;
}