// Given an array of ints, return True if the array contains a 2 next to a 2 somewhere.

// has22([1, 2, 2]) → true

// has22([1, 2, 1, 2]) → false

// has22([2, 1, 2]) → false

function has22(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 2 && numbers[i+1] === 2) {
      return true
    } 
  }
  return false
}

console.log(has22([1, 2, 2])) //→ true

console.log(has22([1, 2, 1, 2])) //→ false

console.log(has22([2, 1, 2])) //→ false


//if array[i] === 2 and array[i]++ ==== 2 then return True


//for loop
//create an empty array to put 2s into
//return bool
//if/else
