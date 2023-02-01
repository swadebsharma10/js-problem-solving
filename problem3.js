// problem no: 3
// Calculate the average of all numbers that is   divisible by 3 from 1 - 6; 

function average(n){
     let count = 0;
     let sum = 0 ;
    for(let i = 1; i <= n; i++){
       if (i  % 3 === 0){
        sum = sum + i;
        count = count +1;
       }
    }

    const avg = sum / count;
    return avg;
}

let number = 30;
let numOfAvg = average(number)
console.log(numOfAvg);