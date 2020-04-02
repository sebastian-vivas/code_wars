// Given an integer n, return any array containing n unique integers such that they add up to 0.
//
//
//
// Example 1:
//
// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

var sumZero = function(n) {
let half = n / 2;
let array = [];
if(n % 2 === 0){
for(i=1; i <= half; i++){
array.push(i)
array.push(-i)
}
}else{
for(i=1; i <= Math.floor(half); i++){
array.push(i)
array.push(-i)
}
array.push(0)
}

return array
};
