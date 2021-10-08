var removePalindromeSub = function(s) {
    //all palindromes
    //looking for output of number of steps to remove all subsequences
    //only a and b, so either 1 or 2 steps to evaluate
    //need something that will start on either end of the string or reverse to evaluate whether it matches the other side
    let reverseString = s.split("").reverse().join("")
    if (reverseString === s){
        return 1
    }
    if (reverseString !== s){
        return 2
    }
};
