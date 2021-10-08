// function flatten(array){
//   return array.reduce(
//   function(a, b) {
//     return a.concat(b);
//   },
//   []
// );
// }
// ---
// function flatten(array){
//   return array.reduce((a, b) => a.concat(b), [])}

// console.log(flatten([[0, 1], [2, 3], [4, 5]]));
// flatten is [0, 1, 2, 3, 4, 5]

function flatten(concatables){
  return concatables.reduce((a, b) => a.concat(b), [])}

console.log(flatten([[0, 1], [2, 3], [4, 5]]));
console.log(flatten(["[0, 1]", "[2, 3]", "[4, 5]"]));

function taco(array){
  return array.map((a) => a*2).filter((a) => a>2).reduce((a, b) => a+b)
}
console.log(taco([1, 2, 3]))

//Stack Overflow
//var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//   function(a, b) {
//     return a.concat(b);
//   },
//   []
// );
// flattened is [0, 1, 2, 3, 4, 5]
