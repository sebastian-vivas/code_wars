function solution(str){
    let word = '';
  for(let i = str.length - 1; i >= 0; i--){
    word += str[i];
  }
  return word;
}

function solution(str){
  return str.split('').reverse().join('');
}

function solution(str){
  if(str === ''){
    return str;
  } else {
    return solution(str.substring(1)) + str[0];
  }
}