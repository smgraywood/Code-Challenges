const mapRecreate = (arr, func) => {
  //creating an emptyArray to store our results
  let emptyArray = []
  //for loop to mimic action of map
  for(let element of arr){
    //new variable to store action of func
    let temp = func(element)
    //pushing results of temp into emptyArray
    emptyArray.push(temp);
  }
  return emptyArray
}

//test cases

//should be [2, 4, 6]
console.log(mapRecreate([1,2,3], x => x * 2));

//should be [-5, -6, -7, -8, -9, -10]
console.log(mapRecreate([5, 6, 7, 8, 9, 10], x => -x));

//should be ["A", "B", "C", "D"]
console.log(mapRecreate(["a", "b", "c", "d"], x => x.toUpperCase()));
