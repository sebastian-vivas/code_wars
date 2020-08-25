const getTurkishNumber = (num) => {
  const singleDigits = ["sıfır", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz" ];
  const doubleDigits = ["on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];
  let numberArray = [];
  let number = num.toString()

  if(num > 9){
   for(i = 0; i < number.length; i++){
    numberArray.push(number[i])
  }
  if(numberArray[1] === "0"){
    return doubleDigits[numberArray[0] - 1]
  } else {
    return doubleDigits[numberArray[0] - 1] + " " + singleDigits[numberArray[1]]
    }
  } else {
    return singleDigits[num]
  }
}
