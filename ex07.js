// Exercise 7: Write a function named 'calculateAverage' that takes an array of numbers and returns the average value.

function calculateAverage(arr) {
  let sum = 0
  arr.forEach(num => sum += num)
  return sum/arr.length
}

console.log(calculateAverage([10, 20, 30, 40, 50])) // 30