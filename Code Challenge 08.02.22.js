/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

//brackets must be closed by matching brackets
//maybe regex?
//input brackets
//output bool

function matchingBrackets(s) {

  //failfast for if our input is blank or a single character/openbracket
  if (s.length <= 1) {
    return false
  }
  //creating a variable to hold an arrayified version of string and remove empty characters
  let stringArray = s.trim().split("")
  //establishing array to push into in our iteration
  let emptyArray = []

  //iterating through our stringArray
  for (let i of stringArray) {
    if (i === "(" || i === "[" || i === "{") {
      //pushing to our emptyArray if we have an open bracket
      emptyArray.push(i);
    }
    if (i === ")") {
      // checking if pairs have open and closing brackets
      if (emptyArray.pop() !== "(") {
        return false
      }
    }
    if (i === "]") {
      if (emptyArray.pop() !== "[") {
        return false
      }
    }
    if (i === "}") {
      if (emptyArray.pop() !== "{") {
        return false
      }
    }
  }
  //if we dont have any extra characters return true
  if (emptyArray.length === 0) {
    return true
  //if there are extra characters (i.e lonely brackets) we return false
  } else {
    return false
  }
}


console.log(matchingBrackets("()[]{}"))
console.log(matchingBrackets("()[]{}{"))
console.log(matchingBrackets("()[]{} "))
