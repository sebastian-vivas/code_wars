// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// --we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value

function solve(arr){
 let allNum = arr.reduce((allNum, num) => (
    allNum[num]=allNum[num]+1||1,allNum), {}
  );
  return arr.sort((a,b) =>
    allNum[a]-allNum[b]||c-d)
}
