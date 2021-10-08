var findLucky = function(arr) {
    //create obj
    var obj = {}
    //loop to evaluate how many times int appears
    for(var i = 0; i < arr.length; i++){
        obj[arr[i]] = obj[arr[i]] + 1 || 1
    }
    
    var res = -1
    //loops once for every property in obj
    for(var key in obj){
        //evaluates if number of times int appears === value of int
        if(parseInt(key) === obj[key]){
            //find largest of lucky numbers
            res = Math.max(res, obj[key])
        }
    }
    //if no lucky numbers return -1
    return res
};

//lucky int is when int value === frequency
//if multi lucky ints return greatest
//if no lucky ints return -1

//split? no.
//loop to evaluate
//if else statement

//adapted from https://leetcode.com/problems/find-lucky-integer-in-an-array/discuss/709702/Simple-JavaScript
