"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Azamat
      Date: 4/17/2026     

      Filename: project09-03.js
*/

/* Page Objects */
let lastVisitDate = document.getElementById("lastVisitDate");
let articleDates = document.getElementsByClassName("posttime");

/* Check if sloggerVisit exists in localStorage */
if (localStorage.getItem("sbloggerVisit")) {

   // Step 4: Retrieve stored date
   let storedLastDate = localStorage.getItem("sbloggerVisit");

   // Step 5: Display last visit date
   lastVisitDate.textContent = storedLastDate;

   // Step 6: Create Date object from stored date
   let lastDate = new Date(storedLastDate);

   // Step 7: Loop through articles
   for (let item of articleDates) {
      let articleDate = new Date(item.textContent);

      if (articleDate > lastDate) {
         item.innerHTML += " <strong>NEW</strong>";
      }
   }

} else {

   // Step 8: First visit
   lastVisitDate.textContent = "Welcome to SBLogger!";

   for (let item of articleDates) {
      item.innerHTML += " <strong>NEW</strong>";
   }
}

/* Step 9: Store current visit date (test date) */
let currentDate = new Date("9/12/2024");
localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString());