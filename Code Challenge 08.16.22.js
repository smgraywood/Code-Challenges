const words = ["planes", "trains", "automobiles"];

// Use the map method on the words array to remove the "s" from the end of each word. 
// Hint: You can use of the String.slice() method to remove the final letter from a string. 
// your function should return ["plane", "train", "automobile"]


function removeS(array){
  array.map(word => word.slice(0, -1))
}
removeS(words)
