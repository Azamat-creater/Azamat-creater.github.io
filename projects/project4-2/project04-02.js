/*    JavaScript 7th Edition
      Chapter 4
      Project 04-02

      Application to display a random Jane Austen Quote
      Author: Azamat
      Date: 3/4/2026    

      Filename: project04-02.js
*/

'use strict'; // Force strict mode rules

// Array of Jane Austen Quotes
let quotes = [
"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
"I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
"Silly things do cease to be silly if they are done by sensible people in an impudent way.",
"Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
"Life seems but a quick succession of busy nothings.",
"Our scars make us know that our past was for real.",
"I cannot speak well enough to be unintelligible.",
"One cannot be always laughing at a man without now and then stumbling on something witty.",
"Men were put into the world to teach women the law of compromise.",
"The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid."
];


// Run the quote generator every time the page loads
window.addEventListener("load", quoteGenerator);


// Function to generate and display a random quote
function quoteGenerator() {
   
   // Number of quotes in the array
   let quoteCount = quotes.length; // Declare quoteCount
   
   // Generate a random integer to select a quote
   // The highest index for the array is quoteCount - 1
   let randomQuote = randomInt(0, quoteCount - 1); // Declare randomQuote and fix highest value
   
   // Retrieve a randomly-selected quote
   let quote = quotes[randomQuote]; // Declare quote and fix typo: randomQuotes -> randomQuote
   
   
   // Display the random quote
   // Using querySelector is more robust than getElementsByTagName[1]
   document.querySelector("blockquote").innerHTML = quote; // Fix element selection
}


/*=================================================================*/
// Function to return a randomly-selected integer between lowest and highest, inclusive
function randomInt(lowest, highest) {
   let size = highest - lowest + 1;
   return Math.floor(lowest + size * Math.random());
}






/*=================================================================*/
// Function to return a randomly-selected integer between lowest and highest, inclusive
function randomInt(lowest, highest) {
   let size = highest - lowest + 1;
   return Math.floor(lowest + size*Math.random());
}