const map = (arr, callback) => {
let index = 0; 
const resultArray = [];
const mapFunction = (arr, callback, index) => {
    if(index==arr.length) return resultArray;
        resultArray[index] = callback(arr[index]);
    return mapFunction(arr, callback, index+1);
}
return mapFunction(arr, callback, index);
}

//code to test map function 

const arr = [1,2,3,4,5];
function addTen(num){
    return (num+10);
}

console.log(map(arr,addTen));
