Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

const booWho = (bool) => {
  
  if(bool === true || bool === false){    
    return true 
  }
    return false;
}

booWho(null);
