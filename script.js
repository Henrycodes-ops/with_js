// let a = 50;
// let b = 100;
// console.log(a+b);
// firstVariable = document.getElementById("changingParagraph");

// Operators
// fruit = prompt('what is your favourite fruit')

// console.log(fruit)
// food = Number(prompt('how much was the food?'))
// console.log(food)
// tipPercentage = Number(prompt('tip %')) / 100
// tipAmount = food * tipPercentage
// total = food + tipAmount

// console.log(tipAmount, 'tipAmount' )
// console.log(total, 'total')

// alert(tipAmount)

// User input

// Data types(strings, numbers)
// numbers 👉 1,5,10,100,2.5
// strings 👉 "hello", "what is up"
// arrays 👉 []
// objects 👉 {}
// boolean 👉 true / false

//  Math Operators
//  multiply *
//  Divide /
//  Exponent **
//  Modulo/remainder % 5%2 = 1
//  Add +
//  Subtract -

// Maths Methods
// Floor - Rounds down
// Ceil - Rounds up
// Random - Gives you a random number

// Baby weather app (conditionals)
// if rain 👉 'Grab your umbrella ☔'
// else 👉 'wear your sunglasses 😎'

// let weather = prompt('How is the weather')

// if (weather == 'rainy') {
//   console.log('Grab your umbrella ☔')
// } else {
//   console.log('Wear your sunglasses 😎')
// }

// conditional operators
//  ==, ===, >, <, <=, >=, !=, !==

// Functions
// this is a function called 'sayMyName'
// and it has 0 arguments
// does: it logs out your name to the console
function sayMyName() {
  console.log("Henry");
}

// sayMyName()

// this is a function called 'sayMyName2'
// and it has 1 argument called 'name'
// it logs out your name to the console
function sayMyName2(name) {
  console.log(name);
}

// sayMyName2('Henry')

function greeting(name) {
  // template literals
  greet = `hi ${name}, Nice to meet you`;
  console.log(greet);
}

// greeting('Henry')

function sum(a, b) {
  // return
  return a + b;
}

// num1 = sum(1, 2)
// console.log(num1)
function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100;
  const tipAmount = food * tipPercentage;
  const total = sum(tipAmount, food);
  return total;
}

//console.log(calculateFoodTotal(300, 20));

// alert(tipAmount)

// ES6
// Arrow Functions =>
const sumArrow = (a, b) => {
  return a + b;
};

// arrow functions with implicit return
// IMPORTANT: For implicit return, remove curly braces
const sumArrow2 = (a, b) => a + b;

//console.log(sumArrow2(10, 50));

// Arrays
//const groceries = ['🍌', '🍎', '🍊', '🍐'];

//console.log(groceries);

// grab the 2nd index
//console.log(groceries[2]);

//Array methods
//groceries.push('🍪', '💙')
//console.log(groceries)
// Array slice
// start from 0 INCLUSIVE and UP to 2 [0, 1]
//console.log(groceries.slice(1, 4))

// array methods (slice, push, indexOf, length)
//console.log(groceries.indexOf('🍐'))
//console.log(groceries.length)

//Objects
const person = {
  name: "Leonardo",
  shirt: "white",
};

console.log(person.name);
console.log(person.shirt);

// acceess object: dot notation , bracket notation
//console.log(person.shirt)//dot notation
//console.log(person['shirt'])//bracket notation
console.log(person["name"]);
console.log(person["shirt"]);

// assign object
person.phone = "08132145677"; //log(...data: any[]): void
console.log(person.phone);
console.log(person);

//person2
const person2 = {
  name: "henry",
  shirt: "white",
};

console.log(person2);
console.log(person2.name);
console.log(person2.shirt);

const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liabilities: 50000,
    netWorth: function () {
      return this.assets - this.liabilities;
    },
  };

  const intro = `Hi, my name is ${person.name} and the color of my shirt is ${
    person.shirt
  } and my net worth is $${person.netWorth()} USD`;

  return intro;
};

console.log(introducer("Micheal", "black"));

const fruits = [
  "🍌",
  "🍎",
  "🍊",
  "🍐",
  "🍌",
  "🍎",
  "🍊",
  "🍐",
  "🍌",
  "🍎",
  "🍊",
  "🍐",
];

//for (let i=0; i < fruits.length; i++) {
//console.log(fruits[i])
//}

//for (const fruit of fruits) {
//console.log(fruit)
//}

//let result = []

//const numbers = [1, 2, 3, 4, 5, 6]
//for (const number of numbers) {
//result.push(number * 2)
//}

//console.log(result)

//const double = (numbers) => {
// let result = []
//for (const number of numbers) {
//   result.push(number + 2)
// }

//return result
//}

//console.log(double([1, 2, 3, 4, 5, 6]))

//const howManyLetters = (phrase) => {
// const phrase = 'hey, can you go to grocery store with me?'

//counter
// let result = 0;

// for of - this make the letter come one by one
// for(const index in phrase) {
//  console.log(Number(index) +1)
//  result = Number(index) + 1
//}

// return { result }
//}

//const phrase = prompt('write your phrase')

//console.log(howManyLetters(phrase))

//const myNumber = (number) => {
// for (const numbers of number) {
//   console.log(numbers * 3)
// }
//}

//[1, 2, 3, 4]
// result = 0
// result = 1
// result = 3
// result = 6
// result = 10

const sumArray = (numbers) => {
  let result = 0;

  //for loop
  for (const john of numbers) {
  console.log(john);
    result = result + john;
  }
  return { result };
};

const nums = [1, 2, 3, 4, 5];
console.log(sumArray(nums));

//myNumber(double ([1, 2, 4]))

const myJohn = (victors) => {
  let result = 0;

  for (const victor in victors) {
    console.log(victor)
    result = result + victor
  }
   
  return { result }
}

const dam = [2, 4, 6, 8]
//console.log(myJohn(dam))


const max = (vandammes) => {
  let result = vandammes[0]


  // loop
  for (const vandamme of vandammes ) {
    if (vandamme > result){
      result = vandamme
    }
  }
  
  return { result }

}

//console.log(max([1, 2, 3, 4, 5]))


const letterFrequency = (phrases) => {
  // letterFrequency('haha') > {'h': 2, 'a': 2}
  console.log(phrases)
  // make a  `frequency` object {}
  let frequency = {}

  for (const phrase of phrases) {
    //check if letter exists in frequency
    if (phrase in frequency) {
      // increment the value by +1
      frequency[phrase]++ 
    } else {
      frequency[phrase] = 1
    }
      // otherwise, set the value to 1
    //console.log(phrase)

  }
  return frequency
  //
}

//const frequency= [haha]
console.log(letterFrequency('lol,what are you doing later tonight lol, haha!'))

// incrementtal operators
// ++, --, +=

// word frequency
const wordFrequency = (phrase) => {
  let frequency = {}

  return frequency
}

console.log(wordFrequency('lol what lol'))