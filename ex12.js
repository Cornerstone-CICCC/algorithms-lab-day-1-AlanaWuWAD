// Exercise 12: Write a function named 'filterAdults' that takes an array of user objects (each with an 'age' property) and returns a new array with only the users who are 18 or older.

function filterAdults(users) {
  let adault = []

  for (let i=0; i<users.length; i++) {
    if (users[i].age >= 18){
      adault.push(users[i])
    }
  }
  return adault
}

console.log(filterAdults([{ name: 'Jane', age: 18 }, { name: 'Joe', age: 19 }, { name: 'Jim', age: 17 }, {name: 'Lulu', age: 25}])) // [{ name: 'Jane', age: 18 }, { name: 'Joe', age: 19 }]