// Exercise 19: Write a function named 'flattenObject' that takes a nested object and returns a new object with no nested properties.

function flattenObject(obj) {
  let newObj = {}
  for(let key in obj){
    if(newObj[key]){
      newObj[key] = key
    }else {
      newObj[key] = obj[key]
    }
    console.log(key)
  }
}
 

console.log(flattenObject({ a: { b: { c: 1 } }, d: 2})) // { 'a.b.c': 1, d: 2 }
