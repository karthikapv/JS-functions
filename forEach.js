const forEach = (array, callback) => {
    let i = 0;
    if(!array.length)
      return;
    if (typeof callback != 'function')
      return;
    let len = array.length;
    while(i<len){
      if(!array[i]){
        return;
      }
      callback(array[i], i, array);
      i += 1;
    }
    return undefined;
  };
