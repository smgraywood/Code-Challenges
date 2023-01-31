// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

  const sumAll = arr => {
  // pass arr of two nums
  // return sum the val of the two nums
  
  // KATIE:
  // variable: Math.max() to sort higher n
  // iterate

  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let result = 0;
  // console.log({max, min})
  for (let i = min; i <= max; i++) {
    result += i;
  }

  return result;
}

sumAll([1, 4]);
