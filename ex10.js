// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') and returns a formatted date string (e.g., 'January 1, 2022').

function formatDate(dateStr) {
  let date = dateStr.split('-')
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  for (let i=0; i< months.length; i++){
    if (date[1] == i+1) {
      return `${months[i]} ${date[2]}, ${date[0]}`
    }
  }
}

console.log(formatDate('2022-01-01')) // 'January 1, 2022'
console.log(formatDate('2024-09-23')) 