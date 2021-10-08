function squirrel_play(temp, is_summer){
  if (is_summer !== true && is_summer !== false){
    return "Please tell me, is it summer? Please type in true or false."
  }
  if (typeof temp !== "number"){
    return "I need a number for our temp!"
  }
  if (is_summer === false && temp >= 60 && temp <= 90){
    return true
  } 
  if (is_summer === true && temp >= 60 && temp <= 100){
    return true
  }
  else{
    return false
  }
}
  console.log(squirrel_play(70, "False"))// → "Please tell me if its summer with all lowercase letters!"
  console.log(squirrel_play("a", false))// → "Please tell me if its summer with all lowercase letters!"
  console.log(squirrel_play(70, false));//→ true
  console.log(squirrel_play(95, false));//→ false
  console.log(squirrel_play(95, true));//→ true
  console.log(squirrel_play(60, true));//→ true
    console.log(squirrel_play(100, true));//→ true
