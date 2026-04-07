"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Azamat
      Date: 3/26/2026   

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

// Run countdown every second
setInterval(countdown, 1000);

function countdown() {
   // Current date and time
   let now = new Date();

   // Display current time
   currentTime.textContent = now.toLocaleString();

   // Graduation date (June 2, 2026)
   let gradDate = new Date("June 2, 2026");

   // Time difference in milliseconds
   let timeLeft = gradDate - now;

   // Calculate days
   let daysLeft = timeLeft / (1000 * 60 * 60 * 24);

   // Calculate hours
   let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

   // Calculate minutes
   let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;

   // Calculate seconds
   let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   // Display results (rounded down)
   daysLeftBox.textContent = Math.floor(daysLeft);
   hrsLeftBox.textContent = Math.floor(hrsLeft);
   minsLeftBox.textContent = Math.floor(minsLeft);
   secsLeftBox.textContent = Math.floor(secsLeft);
}