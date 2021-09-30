var removePalindromeSub = function(s) {
    if (s.length === 0) {
        return 0;
    }
    
    var left = 0;
    var right = s.length - 1;
    
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return 2;
        }
    }
    
    return 1;
};
