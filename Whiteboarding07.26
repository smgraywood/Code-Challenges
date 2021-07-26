// Exercise 2. Write a function that accepts a month number (between 1 and 12), 
// then shows the number of days of that month. Leap years are excluded. 
// Incorrect inputs must be taken into account.
function checkMonthLength(monthNum){
  if(monthNum === 1 || monthNum === 3 || monthNum === 5 || monthNum === 7 
  || monthNum === 8 || monthNum === 10 || monthNum === 12){
    return "Month number " + monthNum + " has 31 days!"
  }
  else if(monthNum === 4 || monthNum === 6 || monthNum === 9 || monthNum === 11){
    return "Month number " + monthNum + " has 30 days!"
  }
  else if(monthNum === 2){
    return "Month number " + monthNum + " has 28 days!"
  }
  else{
    return "This is not a valid month number!"
  }
}

console.log(checkMonthLength(3))//should return "Month number 3 has 31 days!"
console.log(checkMonthLength(6))//should return "Month number 6 has 30 days!"
console.log(checkMonthLength(2))//should return "Month number 2 has 28 days!"
console.log(checkMonthLength(14)) //should return "This is not a valid month number"
console.log(checkMonthLength("eleven")) //should return "This is not a valid month number"

// January (Jan) 2021 There are 31 days in this month.
// February (Feb) 2021 There are 28 days in this month.
// March (Mar) 2021 There are 31 days in this month.
// April (Apr) 2021 There are 30 days in this month.
// May (May) 2021 There are 31 days in this month.
// June (Jun) 2021 There are 30 days in this month.
// July (Jul) 2021 There are 31 days in this month.
// August (Aug) 2021 There are 31 days in this month.
// September (Sep) 2021 There are 30 days in this month.
// October (Oct) 2021 There are 31 days in this month.
// November (Nov) 2021 There are 30 days in this month.
// December (Dec) 2021 There are 31 days in this month.
