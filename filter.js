const filter = (arr, callback) => {
    if(arr.length == 0) return arr;
    let index = 0;
    const resultArray = [];
    const filterFunction = (arr, callback, index) => {
        if(index==arr.length) return resultArray;
        if(callback(arr[index])) {
            resultArray.push(arr[index]);
            }
            return filterFunction(arr, callback, index+1, resultArray);
    }
    
    return filterFunction(arr, callback, index);
    }

//code to test filter function

const arr = [10,33,2,18,9,8,46,12,22];
function lessThan20(num){
    if(num<20) return num;
}

console.log(filter(arr,lessThan20));



