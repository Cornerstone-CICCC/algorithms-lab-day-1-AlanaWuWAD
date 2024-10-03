// Exercise 20: Write a function named 'anagramGroups' that takes an array of strings and returns an array of arrays, grouping anagrams together.

function anagramGroups(arr) {
  let arrCombine =[]
  let n = 0
  for (i=1; i<arr.length ; i++){
    arrCombine[n] = [arr[i-1],arr[i]]
    ++i
    ++n
  }
  return arrCombine
}
                            
console.log(anagramGroups(['bat', 'tab', 'cat', 'act'])) // [['bat', 'tab'], ['cat', 'act']]
