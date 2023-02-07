// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  //input is string
  //create var with empty array (result)
  //run for loop over each char in arr
  //in for loop create switch case
  let result = []
  for(let i = 0; i < str.length; i++){
    switch(str[i]){
      case "A":
        result.push([str[i],"T"])
        break
      case "T":
        result.push([str[i],"A"])
        break
      case "C":
        result.push([str[i],"G"])
        break
      case "G":
        result.push([str[i], "C"])
        break
    }
  }
  return result;
}

pairElement("GCG");
