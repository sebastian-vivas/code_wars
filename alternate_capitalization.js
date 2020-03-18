// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below.
// Index 0 will be considered even.

function capitalize(s){
  let even = "";
  let odd = "";

  for(let i = 0; i < s.length; i++){
  even += i % 2 === 0 ? s.charAt(i).toUpperCase() : s.charAt(i);
  odd += i % 2 !== 0 ? s.charAt(i).toUpperCase() : s.charAt(i);
  }
  return [even, odd];
};
