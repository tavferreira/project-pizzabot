const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

// alert("Hey! Happy to serve your pizza. On our menu we have " + vegetarian + ", " + hawaiian + " and " + pepperoni)

// let orderName = prompt("Enter the name of the pizza you want to order today.")

// startOrder(orderName)

// Used on the iterations
// function checkOrderName(orderName) {
//   if (
//     orderName == vegetarian ||
//     orderName == hawaiian ||
//     orderName == pepperoni
//   )
//     return true;
//   else return false;
// }

// Calculates total order value in kronor
function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

// Returns value in minutes depending on the quantity of pizzas ordered
function cookingTime(orderQuantity) {
  if (orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

// This function was used when going through the iterations
// function startOrder(orderName) {
//   if (checkOrderName(orderName)) {
//     let orderQuantity = prompt("How many of " + orderName + " do you want?");
//
//     alert(
//       "Great, I'll get started on your " +
//         orderName +
//         " right away, it will cost " +
//         totalCost(orderQuantity) +
//         "kr. The pizzas will take " +
//         cookingTime(orderQuantity) +
//         " minutes."
//     );
//
//     document.getElementById("message").innerHTML =
//       "Great, I'll get started on your " +
//       orderName +
//       " right away, it will cost " +
//       totalCost(orderQuantity) +
//       "kr. The pizzas will take " +
//       cookingTime(orderQuantity) +
//       " minutes.";
//   } else {
//     let orderName = prompt("Select a pizza from the menu.");
//     startOrder(orderName);
//   }
// }

//This three functions below prevent the user to select more than one pizza at a time
const selectVegetarian = () => {
  document.getElementById("pepperoni").checked = false;
  document.getElementById("hawaiian").checked = false;
  document.getElementById("vegetarian").checked = true;
  document.getElementById("submit").disabled = false;
};

const selectPepperoni = () => {
  document.getElementById("vegetarian").checked = false;
  document.getElementById("hawaiian").checked = false;
  document.getElementById("pepperoni").checked = true;
  document.getElementById("submit").disabled = false;
};

const selectHawaiian = () => {
  document.getElementById("vegetarian").checked = false;
  document.getElementById("pepperoni").checked = false;
  document.getElementById("hawaiian").checked = true;
  document.getElementById("submit").disabled = false;
};

//This functions helps translating the selected id to the corresponding variable
const translatePizza = pizza => {
  switch (pizza) {
    case "vegetarian":
      return vegetarian;
    case "pepperoni":
      return pepperoni;
    case "hawaiian":
      return hawaiian;
  }
};

// Function that iterates through minutes and seconds to present timer.
const timer = minutes => {
  let minutesLabel = document.getElementById("minutes");
  let secondsLabel = document.getElementById("seconds");
  let totalSeconds = minutes * 60;
  setInterval(setTime, 1000);

  function setTime() {
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    if (totalSeconds > 0) {
      totalSeconds--;
    }
  }

  function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }
};

//This function hides order containers
const hideOrderElements = () => {
  document.getElementById("welcome-text").style.display = "none";
  document.getElementById("picker").style.display = "none";
  document.getElementById("quantity-text").style.display = "none";
  document.getElementById("quantity-div").style.display = "none";
};

const hawaiianPizzaWiki =
  "Hawaiian pizza is a pizza topped with tomato sauce, cheese, pineapple, and ham. Pineapple as a pizza topping divides public opinion: Hawaiian was the most popular pizza in Australia in 1999, accounting for 15% of pizza sales, and a 2015 review of independent UK takeaways operating through Just Eat found the Hawaiian pizza to be the most commonly available. A 2016 survey of US adults had pineapple in the top three least favourite pizza toppings, ahead of anchovies and mushrooms. Greek-Canadian Sam Panopoulos claimed that he created the first Hawaiian pizza at the Satellite Restaurant in Chatham, Ontario, Canada in 1962. Inspired in part by his experience preparing Chinese dishes which commonly mix sweet and savoury flavours, Panopoulos experimented with adding pineapple, ham, bacon and other toppings which were not initially very popular. The addition of pineapple to the traditional mix of tomato sauce and cheese, sometimes with ham or sometimes with bacon, soon became popular locally and eventually became a staple offering of pizzerias around the world. Panopoulos chose the name Hawaiian after the brand of canned pineapple they used.";

// This function counts how many times a substring occurs in a string
const wordCounter = paragraph => {
  let count = 0;

  for (var i = 0; i < hawaiianPizzaWiki.length; i++) {
    if (paragraph[i] === " ") count++;
  }
  count++;

  return count;
  //return hawaiianPizzaWiki.split(' ').length;
};

// Another approach on the same functions
const anotherWordCounter = (paragraph, word) => {
  return hawaiianPizzaWiki.split(word).length;
};

const orderPizza = () => {
  const quantity = document.getElementById("quantity").value;
  const total = totalCost(quantity);
  const time = cookingTime(quantity);
  let pizza = "";
  let pizzaName = "";
  if (document.getElementById("vegetarian").checked) {
    pizza = translatePizza(document.getElementById("vegetarian").name);
    pizzaName = document.getElementById("vegetarian").name;
  } else if (document.getElementById("pepperoni").checked) {
    pizza = translatePizza(document.getElementById("pepperoni").name);
    pizzaName = document.getElementById("pepperoni").name;
  } else if (document.getElementById("hawaiian").checked) {
    pizza = translatePizza(document.getElementById("hawaiian").name);
    pizzaName = document.getElementById("hawaiian").name;
  }

  document.getElementById(
    "message"
  ).innerHTML = `GREAT!<br>We'll get started on your ${pizza} right away, it will cost ${total}kr.<br><br>The pizzas will take ${time} minutes.<br><br>It will be pizza time in:`;
  document.getElementById("message-timer").style.display = "flex";
  document.getElementById("minutes").value = time;
  timer(time);
  hideOrderElements();
  document.getElementById(
    "did-you-know"
  ).innerHTML = `That the first three paragraphs of <a href="https://en.wikipedia.org/wiki/Hawaiian_pizza" target="_blank">Wikipedia</a> article for ${hawaiian} contain ${wordCounter(
    hawaiianPizzaWiki,
    " "
  )} words and the word pineapple appears ${anotherWordCounter(
    hawaiianPizzaWiki,
    "pineapple"
  )} times.`;
  document.getElementById("pizza-order").style.display = "flex";
  document.getElementById("pizza-order").style.backgroundImage =
    "url(images/" + pizzaName + "400.jpg";
};

//When clicking the Submit button calls orderPizza function
document.getElementById("submit").onclick = orderPizza;

//A click on each image call function to prevent selection of more than one pizza at a time
document.getElementById("vegetarian").onclick = selectVegetarian;
document.getElementById("pepperoni").onclick = selectPepperoni;
document.getElementById("hawaiian").onclick = selectHawaiian;
