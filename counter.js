// let myLeads = [];
// const inputEl = document.getElementById("input-el");
// const inputBtn = document.getElementById("input-btn");
// const ulEl = document.getElementById("ul-el");

// localStorage.setItem("myLeads", "www.examplelead.com");

// inputBtn.addEventListener("click", function () {
//   myLeads.push(inputEl.value);
//   inputEl.value = "";
//   renderLeads();
// });

// function renderLeads() {
//   let listItems = "";
//   for (let i = 0; i < myLeads.length; i++) {
//     listItems += `
//    <li> 
//      <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]} </a>
//    </li>
    
//     `;
//   }
//   ulEl.innerHTML = listItems;
// }

// DOM manipulation has a cost: meaning that it is better to do it once.

// const recipient = "James";
// const sender = "Henry  Falolu olurinde";

// const email = `Hey ${recipient}!
//  How is it going? 
//  Cheers ${sender}`;

// console.log(email);


let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
let count = 0;
function increment() {
  count += 1;
  countEl.textContent = count

}

increment();

function save() {
  let savePl = count + " - ";
  saveEl.textContent += savePl;
  console.log(count);
  countEl.textContent = 0
  count = 0
}

save()