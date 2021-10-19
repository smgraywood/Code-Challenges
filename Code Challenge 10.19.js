function findLongestWordLength(str) {
//failing fast to catch everything (0, undefined, or anything not a string) 
// if (!str || str.length === 0 ){
  // if (typeof str === 'string' || str instanceof String)

//   if (typeof myVar === 'string' || myVar instanceof String)
// // it's a string
// else
// it's something else

//catching edge cases
  if (typeof str === 'number' || typeof str === 'symbol' ||  typeof str === 'object' || typeof str === 'boolean' || typeof str === 'undefined') 
  {
    return "Please enter word or string"
  } else {
    //set up variable to convert string to array to split the string to look at each word of the string
  let splitStr = str.split(" ");
// console.log(splitStr)
//create counter to keep track of count
 let counter = 0;  
//use for of loop to iterate through string
  for (let word of splitStr){
  //create condition to check whether word length is greater than counter
  if (word.length > counter){
//assign counter to longest word length
  counter = word.length;
  // console.log(counter);
  // } else if (word === "") {
  //   return "Enter word or sentence!";
  // } else {
  //   return "Enter word or sentence!"
  // }
   }
  }
//return counter
  return counter;
}
  }
  

console.log("The quick brown fox", findLongestWordLength("The quick brown fox jumped over the lazy dog"));

console.log("boolean",findLongestWordLength(true))
console.log("null", findLongestWordLength(null))
console.log("undefined",findLongestWordLength(undefined))
