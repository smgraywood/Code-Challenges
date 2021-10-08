function yuck(arr) {
let returnArray = []
let today = new Date();
//console.log(today)
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = yyyy + mm + dd;
/* console.log(today) */
/* today.split("-").join("")
console.log(today) */
  for(let i = 0; i< arr.length; i++){
  	let expiration = items[i].expiryDate.split("-").join("")
    if ((expiration + 7) < today){
   	returnArray.push(items[i].name)
    }
    }
  return returnArray;
  }


 let items = [
  { name: 'Soy milk', expiryDate: '2021-01-01' },
  { name: 'Sirloin', expiryDate: '2021-12-05' },
  { name: 'Chewy lentils', expiryDate: '2021-07-29' },
  { name: 'Chocolate Cake', expiryDate: '2021-07-22'}
  ] 

  
  console.log(yuck(items))
