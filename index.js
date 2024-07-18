// const questions = [
//   {
//     question: "Which is the largest animal in the world",
//     answers: [
//       {
//         text: "Shark", correct: false
//       },
//       {
//         text: "Girrafe", correct: false
//       },
//       {
//         text: "Blue Whale", correct: true
//       },
//       {
//         text: "Elephant", correct: false
//       },
//     ]
//   },

//   {
//     question: "Which is the smallest continent in the world",
//     answers: [
//       {
//         text: "Asia", correct: false
//       },
//       {
//         text: "Australia", correct: true
//       },
//       {
//         text: "Arctic", correct: false
//       },
//       {
//         text: "Africa", correct: false
//       },
//     ]
//   },

//   {
//     question: "Which is the largest animal in the world",
//     answers: [
//       {
//         text: "Shark", correct: false
//       },
//       {
//         text: "Girrafe", correct: false
//       },
//       {
//         text: "Blue Whale", correct: true
//       },
//       {
//         text: "Elephant", correct: false
//       },
//     ]
//   },
//   {
//     question: "Which is the smallest country in the world",
//     answers: [
//       {
//         text: "Vatican city", correct: true
//       },
//       {
//         text: "Bhutan", correct: false
//       },
//       {
//         text: "Nepal", correct: false
//       },
//       {
//         text: "Shri Lanka", correct: false
//       },
//     ]
//   },
//   {
//     question: "Which is the largest desert in the world",
//     answers: [
//       {
//         text: "Kalahari", correct: false
//       },
//       {
//         text: "Gobi", correct: false
//       },
//       {
//         text: "Sahara", correct: false
//       },
//       {
//         text: "Antartica", correct: true
//       },
//     ]
//   }

// ];

// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   showQuestion();
// }

// function showQuestion(){
//   resetState();
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//    currentQuestion.answers.forEach(answer => {
//      const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//      answerButtons.appendChild(button);
//      if(answer.correct){
//        button.dataset.correct = answer.correct;
//      }
//      button.addEventListener("click", selectAnswer);
//    });
// }

// function  resetState(){
//   nextButton.style.display = "none";
//   while(answerButtons.firstChild){
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
// }

// function selectAnswer(e){
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if(isCorrect){
//     selectedBtn.classList.add("correct");
//     score++;
//   }else{
//     selectedBtn.classList.add("incorrect");
//   }
//   Array.from(answerButtons.children).forEach(button => {
//     if(button.dataset.correct === "true"){
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });
//   nextButton.style.display = "block";
// }

// function showScore(){
//   resetState();
//   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
//   nextButton.innerHTML = "Play Again";
//   nextButton.style.display = "block";
// }

// function handleNextButton(){
//   currentQuestionIndex++;
//   if(currentQuestionIndex < questions.length){
//     showQuestion();
//   }else{
//     showScore();
//   }
// }

// nextButton.addEventListener("click", ()=>{
//   if(currentQuestionIndex < questions.length){
//     handleNextButton();
//   }else{
//     startQuiz();
//   }
// });

//startQuiz();

// const sumArray = (numbers) => {
//   let result = 0;
//   for (const number of numbers) {
//     console.log(number);
//     result = result + number;
//   }
//   return { result };
// };

//const nums = [1, 2, 3, 4, 5, 9];
//console.log(sumArray(nums))

// const max = (numbers) => {
//   let result = numbers[0];

//   //for loop

//   for (const number of numbers) {
//     if (number > result) {
//       result = number;
//     }
//   }

//   return { result };
// };

//console.log(max([1, 2, 3, 4, 5, 6, 1, 9]))

const letterFrequency = (phrase) => {
  console.log(phrase);
  let frequency = {};
  for (const letter of phrase) {
    if (letter in frequency) {
      frequency[letter]++;
    } else {
      frequency[letter] = 1;
    }
  }
  return frequency;
};

console.log(letterFrequency("lol, what are you doing later tonight lol, haha"));

//wordFrequency
const wordFrequency = (phrase) => {
  const words = phrase.split(" ");
  return letterFrequency(words);
};

//const userInput = prompt('Write your sentence')
//console.log(wordFrequency(userInput))
//Icremental operators
// ++, --, +=

// higher order functions
// map - loops and returns an array
// filter - loops and returns an array with matching conditions
// reduce
[1, 2, 3, 4].map((number) => console.log(number * 2));

// or

//let result = [1, 2, 3, 4].map(number => number * 2)
//console.log(result)

// filter ([])
// const filter = (numbers, lessThan) => {
//  let result = []
//  for (const number of numbers) {
//    if (number < lessThan) {
//      result.push(number)
//    }
//  }
//  return result
// }
//console.log(filter([1, 2, 3, 4, 5, 6,], 5))
// const filter = (numbers, greaterThan) => {
//   let result = []
//   for (const number of numbers) {
//     if (number > greaterThan) {
//       result.push(number)
//     }
//   }
//   return result
// }
// console.log(filter([1, 2, 3, 4, 5, 6,], 1))

const nums = [1, 2, 3, 4, 5, 6];
//console.log(nums.filter(num => num > 4 || num < 2))

const actors = [
  { name: "johnny", netWorth: 2000000 },
  { name: "amber", netWorth: 10 },
  { name: "leonardo", netWorth: 10000000 },
];

console.log(actors.reduce((a, b) => a + b.netWorth, 0));
// the zero is important

//let result = actors.filter(actor => actor.netWorth > 10)
//console.log(result)
// playground.innerHtml = `<h1>${JSON.stringify(result)}</h1>`
//console.log(actors.filter(actor => actor.netWorth > 10))
// console.log(nums.filter(num => num > 4 || num < 2))
//console.log(actors.filter(actor => actor.netWorth > 10))
// if (usersIsAuthenticated && userIsPayingMember) {
// no ads
//} else {
//    show youtube ads
//}
// if (usersIsAuthenticated || userIsPayingMember) {
// show youtube videos
//} else {
//    show youtube ads
//}

// reduce

// sum all the networths
// SUM:: Think reduce
// reduce loops and gives you back the accumulator

//const result = num.reduce((prev, curr) => {
// return prev + curr
//})
// const result = num.reduce((prev, curr) => prev + curr
// )

// function sum(a, b) {
//   return a + b
// }

// function multiply(a, b) {
//   return a * b
// }

// const num = [1, 2, 3, 4]
// const result = num.reduce((a, b) => a + b, 0)

// console.log(result)

// DOM stands for Document Object Module

console.log("hello");
let titleDiv = document.getElementById("title");

console.log("before: ", titleDiv.innerText);

let message = "Goodbye my lover!";

titleDiv.innerText = message;
console.log("after: ", titleDiv.innerText);

titleDiv.innerHTML = `<p>${message}</p>`;

titleDiv.style.backgroundColor = "blue";

let redDiv = document.getElementById("red");
let yellowDiv = document.getElementById("yellow");
let greenDiv = document.getElementById("green");

// redDiv.onclick = () => {
//   console.log("User chose: Rock");
// getComputerChoice 👉 'paper'
// userChoice vs. computerChoice 👉 result
// -1, 0, 1
// show everything on the screen (DOM)
//};
// yellowDiv.onclick = () => console.log("yellow");

// greenDiv.onclick = () => console.log("green");

const squares = document.querySelectorAll(".colorButton");
//console.log(squares)
// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

// forEach
const timesClicked = { red: 0, yellow: 0, green: 0 };
squares.forEach((square) => {
  square.onclick = () => {
    timesClicked[square.value]++;
    square.innerText = timesClicked[square.value];

    // console.log(square.value);
  };
});



function clearScores() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => {
    square.innerText = ''
  })
 
}

const clearGameDiv = document.getElementById('clear-game')
clearGameDiv.onclick = () => clearScores()
// the before and after element helps it to keep it order
