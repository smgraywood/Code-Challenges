Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

const truncateString = (str, num) => {
  //in arr
  //split str
  //trad for
  //return var to return
  //take in str, split str, if num >= str.length{repeat str}, if num<str.length{truncate str at num, add ...}
  let newArr = str.split("")
  for(let i=0; i<=newArr.length; i++){
    if(num >= newArr.length){
      return newArr.join("")
    }
    if(num < newArr.length){
      newArr.splice(num)    
      newArr = newArr.join("")
      newArr = newArr.concat("...")
    }
    return newArr
  }    
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
