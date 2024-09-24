// Exercise 9: Write a function named 'flattenArray' that takes an array of nested arrays and returns a single flattened array.

function flattenArray(arr) {
  
  let k = arr.flat(Infinity);
  return k
  
  // let numArr= []
  // for (let i=0; i<arr.length; i++) {
  //   for (let j=0; j<arr[i].length; j++){
  //     let n = arr[i][j]
  //     if (n.length >1){
  //       for (let k=0; k<n.length; k++){
  //       numArr.push(n[k])
  //       }
  //     }else{
  //       numArr.push(arr [i][j])
  //     }      
  //   }
  // }
  // return numArr
}

console.log(flattenArray([[1,2], [3, 4], [5, [6, 7]]])) // [1, 2, 3, 4, 5, 6, 7]