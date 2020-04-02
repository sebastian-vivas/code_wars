// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
//
// You may return any answer array that satisfies this condition.
//
//
//
// Example 1:
//
// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

//P: One argument is passed through the function; A.
//R: The even integers must proceed the odd ones in the array.
//E: [3,1,2,4] --> [2,4,1,3]
//P: Isolate the even integers into their own array.
//   Do the same with the odd integers.
//   Combine the arrays to reform one array with even integers first, then odd.


var sortArrayByParity = function(A){
    let even = A.filter(i => i % 2 === 0);
    let odd = A.filter(i => i % 2 === 1);
    return even.concat(odd);
};
