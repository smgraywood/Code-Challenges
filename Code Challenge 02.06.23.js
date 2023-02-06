// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  var arr = []; 
  var sourceKeys = Object.keys(source) // Creates   array of keys
  arr = collection.filter(function(obj) {
  // obj is each item (an object) in collection
  for (var i = 0; i < sourceKeys.length; i++) {
    // loop through based on how many keys there were in source
    if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]])   
      // if obj doesnt have the key OR if obj key's value doesn't equal source key's value
      // return false so it get's filtered out
    {
      return false;
    }
  }
  return true;
  // if it passed the above if statement, doesn't get filtered out and goes into arr
})
console.log(arr)
return arr;
// return an array
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
