PigLatin

const translatePigLatin = str => {
  // iterate 
    // if the first letter is consonant
      // shift the first letter and concat "ay" to end of str
    // if vowel 
      // concat "way" to str
  // return the results of concat str

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let first = str[0];
  if (first == 'a' || first == 'e' || first == 'i' || first == 'o' || first == 'u') {
    // console.log(str + 'way')
    return str + 'way';
  }

  let strArr = str.split('');
  let counter = '';
  let final = '';

  strArr.forEach((letter, i) => {
    if (i === strArr.length - 1 && !str.includes(vowels)) {
      // console.log("FUN");
      return final = str + 'ay';
    } 
    if (!vowels.includes(letter)) {
      counter = counter + letter; 
      console.log({ counter });
    } else {
      final = strArr.splice(i).join('') + counter + 'ay';
      console.log({final})
    }
  });
  
  return final;
}
translatePigLatin("eight")
translatePigLatin("rhythm");



