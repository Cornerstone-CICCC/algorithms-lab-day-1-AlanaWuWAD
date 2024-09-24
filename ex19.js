// Exercise 19: Write a function named 'flattenObject' that takes a nested object and returns a new object with no nested properties.

function flattenObject(obj) {
  let arr =[]
  //console.log(Object.values(obj).constructor === Object)
  for (let prop in obj) {
    console.log(Object.values(prop))
    // if (Object.values(obj).length > 0){
    //   console.log(Object.values(obj).length)
    // }
   // arr.push(prop);        // 會打印屬性名：name, age, city
   // console.log(arr); }

    // if (obj.hasOwnProperty(prop)) {
    //   console.log(prop, obj[prop]);
    // }

  }
}
  //let k = Object.values(obj)
  //return k


console.log(flattenObject({ a: { b: { c: 1 } }, d: 2})) // { 'a.b.c': 1, d: 2 }
