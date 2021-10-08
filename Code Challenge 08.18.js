
function string_match(stringA, stringB) {
    let counter = 0;
    for(i = 0; i < stringA.length - 1 && i < stringB.length - 1; i++){
        let bSub = stringA.substring(i, i + 2);
        let aSub = stringB.substring(i, i + 2);

        if(aSub === bSub){
        counter++;
        }
    }
  return counter;
}

console.log(string_match('xxcaazz', 'xxbaaz')) //→ 3

console.log(string_match('abc', 'abc')) //→ 2

console.log(string_match('abc', 'axc')) //→ 0

console.log(string_match('zznm', 'zzko')) //→ 1

console.log(string_match('nmzz', 'zzko')) //→ 0

//adapted from https://stackoverflow.com/questions/51190416/given-2-strings-a-and-b-return-the-number-of-the-positions-where-they-contain/51191006
