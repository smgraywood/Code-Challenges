// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

const binaryAgent = (str) => {
// console.log(str.split(" ")[0])
// console.log(parseInt(str.split(" ")[0], 2))
// console.log(String.fromCharCode(65))

let phrase = "";
let strArr = str.split(" ")

strArr.forEach( binaryStr => {
let charCode = parseInt(binaryStr, 2)
let char = String.fromCharCode(charCode)
phrase += char
})
return phrase;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
