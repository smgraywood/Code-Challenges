// first half is X numbers and second half is Y numbers 
// they want us to intermingle x and y numbers 
var shuffle = function(nums, n) {
    // break the array in half 
    let firstHalf = nums.slice(0,n)
    let secondHalf = nums.slice(n, nums.length)
    
    console.log(firstHalf, secondHalf)
    
    let mingledArray = []; 
    // push from the first array into a new array and then push from the second array in to the new array and so on and so forth 
    
    
    for (let i = 0; i < firstHalf.length; i ++){
        mingledArray.push(firstHalf[i],secondHalf[i])
    }
    
    return mingledArray
    
    
};
