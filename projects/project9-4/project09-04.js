"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: Azamat
      Date: 4/17/2026   

      Filename: project09-04.js
*/

"use strict";

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

/* Custom event when puzzle is solved */
window.addEventListener("puzzleSolved", updateRecord);

/* Load best score on page load */
window.addEventListener("load", function () {

   let best = getBestTime();

   if (best !== Infinity) {
      bestText.textContent = best + " seconds";
   } else {
      bestText.textContent = "not yet recorded";
   }

});


/* Get best time from cookie safely */
function getBestTime() {
   let cookies = document.cookie.split("; ");

   for (let c of cookies) {
      let [name, value] = c.split("=");

      if (name === "puzzle8Best") {
         return parseInt(value);
      }
   }

   return Infinity; // no record yet
}


/* Update best time after puzzle is solved */
function updateRecord() {

   let solutionTime = parseInt(clockTimer.value);
   let bestTime = getBestTime();

   // Update only if new best OR first score
   if (solutionTime < bestTime) {
      bestTime = solutionTime;

      document.cookie =
         "puzzle8Best=" + bestTime +
         "; max-age=" + (90 * 24 * 60 * 60);
   }

   // Always show best time after game ends
   bestText.textContent = bestTime + " seconds";
}
