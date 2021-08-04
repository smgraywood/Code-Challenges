function intersection(array1, array2){
  var result = [];
  while( array1.length > 0 && array2.length > 0 )
  {  
     if (array1[0] < array2[0] ){ array1.shift(); }
     else if (array1[0] > array2[0] ){ array2.shift(); }
     else /* they're equal */
     {
       result.push(array1.shift());
       array2.shift();
     }
  }

  return result;
}
console.log(intersection([1, 2, 3, 4], [2, 3, 4, 5]))
console.log(intersection([2, 4, 6, 8], [1, 3, 5, 7]))
console.log(intersection([10, 12, 13, 14], [12, 13, 14, 15]))
