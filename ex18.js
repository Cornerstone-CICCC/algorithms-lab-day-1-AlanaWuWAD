// Exercise 18: Write a function named 'fibonacci' that takes a non-negative integer 'n' and returns the 'n'th number in the Fibonacci sequence.
// Fibonacci sequence: The Fibonacci sequence is a series of numbers in which each number (called a Fibonacci number) is the sum of the two preceding ones. Typically, the sequence starts with 0 and 1. The sequence goes as follows:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

function fibonacci(n) {
  let arr = [0,1,1,2,3]
  if (n === 0){
    return 0
  }else if (n === 1){
    return 1
  }else { //n>=2
    for (let i=2; i<n+1; i++){
      arr[i] = arr[i-1]+arr[i-2]
    }
  }
  return arr[n]
}

console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(14)); // Output: 377