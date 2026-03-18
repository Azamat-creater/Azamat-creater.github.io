"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Author: Azamat
      Date: 3/17/2026
*/

// Run function when page loads
window.addEventListener("load", function() {

   // Create node list of all select elements inside #govLinks
   let allSelect = document.querySelectorAll("#govLinks select");

   // Loop through each select list
   for (let i = 0; i < allSelect.length; i++) {

      // Add onchange event handler
      allSelect[i].onchange = function(evt) {

         // Get selected URL
         let linkURL = evt.target.value;

         // Open new window/tab if valid link
         if (linkURL !== "#") {
            let newWin = window.open(linkURL);
         }
      };
   }

});