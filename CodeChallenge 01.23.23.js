/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
Example
arr = [1,1,0,-1,-1]
There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:
0.400000
0.400000
0.200000

*/


const calcPerc = (arr) => {
  let positiveCount = 0
  let negativeCount = 0
  let zeroCount = 0
  for (let i = 0; i < arr.length; i++) {
    let int = arr[i]
    if (int > 0) {
      positiveCount++
    }
    if (int < 0) {
      negativeCount++
    }
    if (int = 0) {
      zeroCount++
    }
  }
  let ratioPos = positiveCount / arr.length
  let ratioNeg = negativeCount / arr.length
  let ratioZero = zeroCount / arr.length
  return `${ratioPos}, ${ratioNeg}, ${ratioZero}`
}

console.log(calcPerc([1, 1, 0, -1, -1]))
