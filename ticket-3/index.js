function countNumberOfNinesInNumber(number) {
  let count = 0;
  // converting param to a string

  let numberString = number.toString()
 
  for (let i = 0; i < numberString.length; i++) {
    const digit = numberString[i];
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}




console.log(countNumberOfNinesInNumber(989))