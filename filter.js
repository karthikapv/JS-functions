const filter = (arr, callback) => {
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
