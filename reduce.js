const reduce = (arr, callback) => {
 	let initialValue = undefined;
 	let result = arr[0];
 	let index = 1;

 	const reduceArray = (arr, callback, index, result) => {
 		if(index==arr.length) return result;
 		result = callback(result, arr[index]);
 		return reduceArray(arr, callback, index+1, result);
 	}

 	result = reduceArray(arr, callback, index, result);
 	return initialValue ? initialValue+result : result;
 }
