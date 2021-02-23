// You will be given an array of strings. The words in the array should mesh together where one or more letters at the end of one word will have the same letters (in the same order) as the next word in the array. But, there are times when all the words won't mesh.

// Examples of meshed words:

// "apply" and "plywood"

// "apple" and "each"

// "behemoth" and "mother"

// Examples of words that do not mesh:

// "apply" and "playground"

// "apple" and "peggy"

// "behemoth" and "mathematics"

// If all the words in the given array mesh together, then your code should return the meshed letters in a string. You won't know how many letters the meshed words have in common, but it will be at least one.

// If all the words don't mesh together, then your code should return "failed to mesh".

// Input: An array of strings. There will always be at least two words in the input array.

// Output: Either a string of letters that mesh the words together or the string "failed to mesh".

function wordMesh(arr){
    let newArr = [];
    for(let i = 1; i < arr.length ; i++){
      let word = arr[i - 1];
      for(let j = 0; j < word.length ; j++){
           var found = false;
           let letters = word;
               letters = letters.substring(j);
      if(arr[i].startsWith(letters)) { newArr.push(letters); found = true; break; }
      }
      if(!found) return 'failed to mesh';
    }
       return newArr.join("");
    };