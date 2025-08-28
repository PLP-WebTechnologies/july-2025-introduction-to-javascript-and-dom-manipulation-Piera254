// ===============================
// Part 1: JavaScript Basics
// ===============================

function checkNumber() {
  let number = prompt("Enter a number:");
  if (number > 0) {
    document.getElementById("basicOutput").textContent = "You entered a positive number!";
  } else if (number < 0) {
    document.getElementById("basicOutput").textContent = "You entered a negative number!";
  } else {
    document.getElementById("basicOutput").textContent = "You entered zero!";
  }
}

// ===============================
// Part 2: Functions
// ===============================

// Function to calculate total price
function calculateTotal(price, quantity) {
  let total = price * quantity;
  document.getElementById("functionOutput").textContent = `Total cost: $${total}`;
  return total;
}

// Function to format a string
function formatName(name) {
  return name.trim().toUpperCase();
}
console.log(formatName("  Peris ")); // Example usage

// ===============================
// Part 3: Loops
// ===============================

// Countdown with for loop
let countdownList = document.getElementById("countdown");
for (let i = 5; i >= 1; i--) {
  let li = document.createElement("li");
  li.textContent = i;
  countdownList.appendChild(li);
}

// ===============================
// Part 4: DOM Manipulation
// ===============================

let changeTextBtn = document.getElementById("changeTextBtn");
let toggleColorBtn = document.getElementById("toggleColorBtn");
let createElementBtn = document.getElementById("createElementBtn");
let domText = document.getElementById("domText");
let dynamicList = document.getElementById("dynamicList");

// Change text content
changeTextBtn.addEventListener("click", () => {
  domText.textContent = "The text has been changed!";
});

// Toggle class (color)
toggleColorBtn.addEventListener("click", () => {
  domText.classList.toggle("colorToggle");
});

// Create new element dynamically
createElementBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = "New List Item";
  dynamicList.appendChild(li);
});
