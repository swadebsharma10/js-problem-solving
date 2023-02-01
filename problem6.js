// Check if a number is prime.
// prime number is count from 2 --> (n-1)

function isPrime (number){
    for(let i =2; i < number ; i++ ){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

const number = 17;
const result = isPrime(number);
console.log(result);