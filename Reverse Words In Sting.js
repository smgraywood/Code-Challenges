// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.


var reverseWords = function(s) {
   let splitSentence = s.split(' ');
   let newSentence = ''
   let newSentenceArray = []
    for(let i = 0; i < splitSentence.length; i++){
        if (i === 0){
            let word = splitSentence[i]
            newSentenceArray.push(word)
            console.log(newSentenceArray)
        }
        else{
           let word = splitSentence[i] + ' '
           console.log(word)
            newSentenceArray.push(word)
            console.log(newSentenceArray)
         }
        } 
        for(let i = 0; i < newSentenceArray.length; i++){
            let wordWithSpace = newSentenceArray[i];
                for(let i = wordWithSpace.length - 1; i >= 0; i--){
                newSentence += wordWithSpace[i]    
                }

    }
    return newSentence
};

//input is string
//output is string
//take in a sentence with atleast 1 word, never empty, all words are defined as being separated by whitespace, return each of the words in reverse, while still maintaining the sentence structure. 


//.split
//.reverse
