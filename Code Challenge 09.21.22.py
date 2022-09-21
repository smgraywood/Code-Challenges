# // Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.



# // Example 1:

# // Input: s = "Let's take LeetCode contest"
# // Output: "s'teL ekat edoCteeL tsetnoc"
# // Example 2:

# // Input: s = "God Ding"
# // Output: "doG gniD"


# // Constraints:

# // 1 <= s.length <= 5 * 104
# // s contains printable ASCII characters.
# // s does not contain any leading or trailing spaces.
# // There is at least one word in s.
# All the words in s are separated by a single space.


def reverse_words(s):
  split_sentence = s.split(" ")
  new_sentence_array = []
  
  for word in split_sentence:
    word_reverse = word[::-1]
    new_sentence_array.append(word_reverse)
    
  return " ".join(new_sentence_array)

#OR

def reverse_words_(s):
  return " ".join([word[::-1] for word in s.split(" ")])
	
result = reverse_words_("Hello, world")
print(result)
