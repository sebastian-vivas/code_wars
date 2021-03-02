// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x){
    const arr = x.split(' ');
    let objArr = arr.map(function (e, i) {
      return {index: i, value: e[e.length - 1]};
  });
    
    objArr.sort(function(a, b) {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });
    
    var result = objArr.map(function(el){
    return arr[el.index];
  });
    
    return result
  };
  