/*
Problem Statement #
Implement a function that merges two sorted arrays into another sorted array. Name it mergeArrays(arr1, arr2).

Input: #
Two sorted arrays.

Output: #
A merged sorted array consisting of all elements of both input arrays.

Sample Input #
arr1 = [1,3,4,5]  
arr2 = [2,6,7,8]
Sample Output #
arr = [1,2,3,4,5,6,7,8]
*/

function mergeArrays(arr1, arr2) {
  let emptyArray = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      emptyArray.push(arr1[i])
      i++
    }
    else {
      emptyArray.push(arr2[j])
      j++
    }
  }
  if (i <= arr1.length - 1) {
    //console.log(i)
    arr1.splice(0, i)
    emptyArray = emptyArray.concat(...arr1)
  }
  else if (j <= arr2.length - 1) {
    //console.log(j)
    //console.log(arr2)
    arr2.splice(0, j);
    emptyArray = emptyArray.concat(...arr2)
  }
  return emptyArray
}

console.log(mergeArrays([1, 3, 4, 5], [2, 6, 7, 8]))
