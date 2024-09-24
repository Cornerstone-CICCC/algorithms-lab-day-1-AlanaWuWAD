// Exercise 8: Write a function named 'longestWord' that takes a string of text and returns the longest word in the string.

function longestWord(text) {
  let words = text.split(' ')
  let bytes = '' // current longest word
  console.log(words)

  for (let i=0; i< words.length; i++){
    if (words[i].length >= bytes.length){
      bytes = words[i]
    }
  } 
  return bytes
}

console.log(longestWord('The quick brown fox jumps over the lazy dog')) // 'jumps'
