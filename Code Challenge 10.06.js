var twoSum = function(numbers, target) {
  var sum = 0;
  var left = 0;
  var right = numbers.length - 1;
  while (left < right) {
    sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
};

//adapted from https://baffinlee.com/leetcode-javascript/problem/two-sum-ii-input-array-is-sorted.html
