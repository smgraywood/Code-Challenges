# Pig Latin is a way of altering English Words. The rules are as follows:

# - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

# - If a word begins with a vowel, just add way at the end.


def translate_pig_latin(str):
    vowels = ['a', 'e', 'i', 'o', 'u']
    first = str[0]
    if first in vowels:
        return str + 'way'

    strArr = list(str)
    counter = ''
    final = ''

    for i, letter in enumerate(strArr):
        if i == len(strArr) - 1 and all(v not in str for v in vowels):
            final = str + 'ay'
            break
        if letter not in vowels:
            counter += letter
        else:
            final = ''.join(strArr[i:]) + counter + 'ay'
            break

    return final

print(translate_pig_latin("eight"));
print(translate_pig_latin("rhythm"));
print(translate_pig_latin("california"));
