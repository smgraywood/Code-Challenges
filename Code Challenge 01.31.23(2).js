// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2)and greater than 5 (index 1).

const getIndexToIns = (arr, num) => {

  // sort the array
  //iterate through the array
  //looking for numbers less than and great than the given num, where does it belong in the array
  //return an index of where that number fits within the array
  //insert at first instance of repeat
  //no neg numbers
  let sortedArray = arr.sort((a, b) => a - b)
  if(sortedArray.length === 0){
    return 0
  }
  let insertedIndex;
  for(let i = 0; i < sortedArray.length; i++){
    if(sortedArray[i] >= num){
      return insertedIndex = i
    }
    //when num greater than last value of sortedArray
    if(num > sortedArray[sortedArray.length-1]){
      return insertedIndex = sortedArray.length
    }
    //if there's nothing in the array

  }
  return insertedIndex
}

getIndexToIns([2, 5, 10], 15) // => 3;
