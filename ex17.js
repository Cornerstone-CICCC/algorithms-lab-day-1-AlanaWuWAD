// Exercise 17: Write a function named 'mostFrequent' that takes an array of strings and returns the string that appears the most frequently.

function mostFrequent(arr) {
  // return arr.reduce((curr,fruit) =>{
  //   curr[fruit]=(curr[fruit]||0)+1;
  //   return curr
  // },{})

  let obj = {}
  let maxFruit = ''
  let maxNum = 0
  arr.forEach(fruit => {obj[fruit]= (obj[fruit] || 0) +1})
  for(let key in obj){
    if(obj[key]>maxNum){
      maxNum = obj[key]
      maxFruit = key
    }
  }
  return maxFruit
}

console.log(mostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])) // 'apple'