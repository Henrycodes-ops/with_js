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
    function sayMyName(){
      console.log('Henry')
    }
    
    // sayMyName()
    
    
    // this is a function called 'sayMyName2'
    // and it has 1 argument called 'name'
    // it logs out your name to the console
    function sayMyName2 (name){
      console.log(name)
    }
    
    // sayMyName2('Henry')
    
    function greeting(name) {
      // template literals
      greet = `hi ${name}, Nice to meet you`
      console.log(greet)
    }
    
    // greeting('Henry')
    
    
    function sum(a, b) {
      // return
      return a + b
    }
    
    // num1 = sum(1, 2)
    // console.log(num1)
  function calculateFoodTotal(food, tip) {
    const  tipPercentage = tip / 100
    const  tipAmount = food * tipPercentage
    const  total = sum(tipAmount, food)
    return total
}
     

  console.log(calculateFoodTotal(300, 20))
    
    // alert(tipAmount)

// ES6
// Arrow Functions =>
const sumArrow = (a, b) => {
  return a + b
}

// arrow functions with implicit return
// IMPORTANT: For implicit return, remove curly braces
//const sumArrow2 = (a, b) => a + b

//console.log(sumArrow2(10, 50))




//function sumArrow3 = (c, b) => c + b

console.log(sumArrow3(2, 2))

