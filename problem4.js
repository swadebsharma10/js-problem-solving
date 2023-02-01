// Calculate Electricity Bill
// for first 100 unit = 5 tk per unit
// for more than 100 unit= 6tk for every unit more than 100 .
// for more than 200 unit= 7tk for every unit more than 200.


function electricityBill (unit){
    let bill;

    if(unit <= 100){
        bill = unit*5;
    }
    else if(unit <= 200){
        //unit 150
        const first100 = 100*5;
        const remaining = unit - 100;
        const remainingCost= remaining*6;
        bill = first100 + remainingCost;
    }
    else if( unit > 200){
        // unit 230
        const first100 = 100 * 5;
        const second100 = 100 * 6;
        const remaining = unit - 200;
        const remainingBill = remaining * 7;
        bill = first100 + second100 + remainingBill; 
    }

    return bill;
}

const totalUnit =300;
const totalBill =electricityBill(totalUnit);
console.log(totalBill)
