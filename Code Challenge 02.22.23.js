// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


var groupAnagrams = function(strs) {
    const map = {};
    
    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        
        if (!map[sorted]) {
            map[sorted] = [str];
        } else {
            map[sorted].push(str);
        }
    }
    
    return Object.values(map);
};
