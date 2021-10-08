function has22(int_array){
  for (let i = 0; i < int_array.length; i++){
    if ((int_array[i] === 2) && (int_array[i+1] === 2)){
      return true
    }
    else if ((int_array[i] === 2) && (int_array[i-1] === 2)){
      return true
    }
    }  
  return false
}
console.log(has22([1, 2, 2, 1]))
console.log(has22([2, 2, 1, 1]))
console.log(has22([1, 1, 2, 1]))
console.log(has22([2, 1, 2, 1]))
