const reduce = (arr, reducer) => {  
	if(arr.length == 0) return undefined;
	let initialValue = 0; 
	let accumulator = initialValue;        
	for(let i=0;i<arr.length;i++)        
		accumulator = reducer(accumulator, arr[i]);    
	return accumulator;
}

 //code to test reduce function
 const arr = [15.5, 2.3, 1.1, 4.7];
 function roundSum(accumulator,arrayElement){
	return accumulator + Math.round(arrayElement);
}
const sum = reduce(arr, roundSum);
console.log(sum);
 
