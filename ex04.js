// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

function countOccurrences(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1; 
    //當處理到 'apple' 時，首先檢查 acc['apple'] 是否已存在：
    //如果 acc['apple'] 尚未存在（第一次碰到這個字串），acc['apple'] 的值為 undefined，所以 (undefined || 0) 會返回 0，然後加 1。
    
    return acc;
  }, {});
}

console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }