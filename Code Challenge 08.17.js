function sumOfTwoArrays(array1, array2) {
//creation of variables for counter and resulting array
  let result = [];
  let ctr = 0;
//check for edge cases
  if (array1.length === 0 && array2.length === 0) {
    return "Both of your arrays are empty!";
  }
  else if (array1.length === 0) {
    return "Your first array is empty!";
  }
  else if (array2.length === 0) {
   return "Your second array is empty!";
  }
//push 0 to account for differences in length
  else if (array1.length < array2.length){
    for (i = 0; i < (array2.length - array1.length); i++){
      array1.push(0)
    }
  }
  else if (array2.length < array1.length){
    for (i = 0; i < (array1.length - array2.length); i++){
      array2.push(0)
    }    
  }  
//while loop to iterate over array and add together arrays
  while (ctr < array1.length || ctr < array2.length)
      {
        result.push(array1[ctr] + array2[ctr]);
        ctr++;
      }
//return newly created array
    return result;}

console.log(sumOfTwoArrays([1, 0, 2, 3, 4], [3, 5, 6, 7, 8]));
console.log(sumOfTwoArrays([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));
console.log(sumOfTwoArrays([1, 0, 2, 3, 4], [3, 5, 6]));//bug
console.log(sumOfTwoArrays([], []));
console.log(sumOfTwoArrays([], [4, 6, 9]));console.log(sumOfTwoArrays([1, ,7, 14], []));

// adapted from https://www.w3resource.com/javascript-exercises/javascript-array-exercise-19.php
