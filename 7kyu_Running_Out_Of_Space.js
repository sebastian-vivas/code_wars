// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].

function spacey(array){
    const newArray = [];
  if(array.length === 4){
      newArray.push(array[0], array[0] + array[1], array[0] + array[1] + array[2], array[0] + array[1] + array[2] + array[3])
    } else if (array.length === 3){
    newArray.push(array[0], array[0] + array[1], array[0] + array[1] + array[2])
    } else {
    newArray.push(array[0], array[0] + array[1], array[0] + array[1] + array[2], array[0] + array[1] + array[2] + array[3], array[0] + array[1] + array[2] + array[3] + array[4])
    }
    return newArray
  }