// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};
