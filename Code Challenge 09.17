/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits === '') { return []; }
  const strDigits = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };

  if (digits.length === 1) { return [...strDigits[digits]]; }
  const res = [];
  const combine = (cur, n) => {
    if (cur.length === digits.length) {
      res.push(cur);      
      return;
    }

    [...strDigits[digits[n]]].forEach(x => {
      combine(cur + x, n + 1);
    });

  };

  combine('', 0);
  return res;
};
