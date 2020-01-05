This was the fourth and last project of the first sprint on the Technigo Frontend Bootcamp, which was focused on Javascript basics. The project was also a pair-programming task with [Joacim Nilsen](https://github.com/JoacimNilsen).

## 1. What is this?

The purpose of this assignment was to practice pair-programming and some basic Javascript. The goal was to build a webpage that would allow ordering pizza.

These were some suggestions for stretch goals and a deep-dive in this project:

* Make a form in HTML for the input from the user, pizza type and number of pizzas
* Make the pizza ordering with the help of clicking different images of pizzas.
* Show images of the pizza you ordered when you see the final order details.
* Add a CSS file and style the page.
* Make a little countdown timer that shows up when your order is finished. Starting on 10, 15 or 20 minutes accordingly to the amount of pizzas you ordered.
* Go to the Wikipedia Article about [Hawaiian Pizza](https://en.wikipedia.org/wiki/Hawaiian_pizza) and:
    * Copy the first three paragraphs. Store the text in a String
    * Make your program count the number of words in the string
    * Make your program count the number of times the word pineapple appears.

## 2. What did we do?

We've built the first attempt by using alerts and getting input from prompt. 
Then we've decide to go for the stretch goal and use a form instead to go through the pizza order. 
The user is able to pick different pizzas by clicking on pictures and select the quantity with a dropdown.
When clicking the order button, the form will be posted and a summary of the order will be presented.
Total price and time will be presented, as long with a countdown timer. 
It will also be presented a Did you know section that would show how many words appear in the first two paragraphs of Wikipedia Article about Hawaiian Pizza and how many time the word pineapple appears. We've counted the number of spaces in the string for the first one and for the second one we've splitted the string by the word pineapple using split and returned the length of the resulting array.

## 3. Where can you see it in action?

You can see the project [here](https://upbeat-swartz-d86557.netlify.com/).