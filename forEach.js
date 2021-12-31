const forEach = (array, callback) => {
    let i = 0;
    if(!array.length)
      return;
    if (typeof callback != 'function')
      return;
    while(i<array.length){
      if(!array[i]){
        return;
      }
      callback(array[i], i, array);
      i += 1;
    }
    return undefined;
  };
