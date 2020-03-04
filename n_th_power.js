/*You are given an array with positive numbers and a number N.
You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1.
Don't forget that the first element has the index 0.*/

function index(array, n){
const nthPower = array[n];
const result = Math.pow(nthPower, n);

if(n === 0) return 1;
if(n >= array.length) return -1;
if(n === (-n)){
return -1
}else{
return result;
}
}
