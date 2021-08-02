function make_tags(input_string1, input_string2){
    var count1 = Array.from({length: 26}, (_, i) => 0);
    var count2 = Array.from({length: 26}, (_, i) => 0);
 
    // count frequency of each character
    // in first string
      for (i = 0; i <     input_string1.length ; i++)
        count1[input_string1.charAt(i).charCodeAt(0) -'a'.charCodeAt(0)]++;
 
    // count frequency of each character
    // in second string
      for (i = 0; i < input_string2.length ; i++)
        count2[input_string2.charAt(i).charCodeAt(0) -'a'.charCodeAt(0)]++;
 
    // traverse count arrays to find
    // number of characters to be removed
      var result = 0;
      for (i = 0; i < 26; i++)
        result += Math.abs(count1[i] -
                           count2[i]);
    return result;
}
 

console.log(make_tags("aab","a")) //should return 2);
console.log(make_tags("a","aab")) //should return 2);
console.log(make_tags("codewars","hackerrank")) //should return 10);
console.log(make_tags("","")) //should return 0);


//remove letters that are not the same in 2 strings
//compare the strings
//find letters not in common
//remove those letters
//return how many letters needed to be removed
