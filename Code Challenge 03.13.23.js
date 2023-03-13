
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


const DIGIT_TO_LETTERS = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}
/**
 * @param {string} digits
 * @return {Array<string>}
 */
function letterCombinations(digits) {
  // Handles edge case.
  if (digits == "") {
    return [];
  }
  const output = [];
  findCombinations(digits, 0, '', output);
  return output;
};
/**
 * @param {string} digits
 * @param {Number} index
 * @param {string] prefix The first part of the output string.
 * @param {Array<string>} The output array that will be modified.
 */
function findCombinations(digits, index, prefix, output) {
  // Handles terminal condition.
  if (index == digits.length) {
    output.push(prefix);
    return;
  }
  // Picks a letter, then recurses on the next digit.
  const letters = DIGIT_TO_LETTERS[digits[index]];
  for (let i = 0; i < letters.length; i++) {
    findCombinations(digits, index + 1, prefix + letters[i], output);
  }
}
