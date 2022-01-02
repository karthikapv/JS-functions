const forEach = (arr, callback) => {
    let i = 0;
    if(!arr.length)
      return;
    while(i<arr.length){
      if(!arr[i]){
        return;
      }
      callback(arr[i], i, arr);
      i += 1;
    }
    return undefined;
  };

//code to test forEach function

  const numbers = [65, 44, 12, 4];
  function multiplyTen(item, index, arr) {
    arr[index] = item * 10;
  }
  forEach(numbers, multiplyTen)
  console.log(numbers);