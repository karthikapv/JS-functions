const map = (arr, callback) => {
let index = 0;
const resultArray = [];
const mapFunction = (arr, callback, index) => {
    if(index==arr.length) return arr;
        arr[index] = callback(arr[index]);
    return mapFunction(arr, callback, index+1);
}

return mapFunction(arr, callback, index);
}

