// Find if anybody got A+ from your friends.
// marks = [78, 82, 69];

function checkGpa (arr){
    for(let i = 0; i < arr.length; i++ ){
        // console.log('friends'+ i  +'th mark'+ arr[i]);
        if(arr[i] >= 80){
            return true;
        }
        
    }
    return false;
}

const friendsMark = [78, 82, 69];
const result = checkGpa(friendsMark);
console.log(result);
