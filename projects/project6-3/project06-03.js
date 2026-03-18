"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Author: Azamat
      Date: 3/18/2026
*/

// Checkbox reference
let useShip = document.getElementById("useShip");

// Run copy function when clicked
useShip.addEventListener("click", copyShippingToBilling);

// Function to copy shipping → billing
function copyShippingToBilling() {

   if (useShip.checked) {

      document.getElementById("firstnameBill").value =
         document.getElementById("firstnameShip").value;

      document.getElementById("lastnameBill").value =
         document.getElementById("lastnameShip").value;

      document.getElementById("address1Bill").value =
         document.getElementById("address1Ship").value;

      document.getElementById("address2Bill").value =
         document.getElementById("address2Ship").value;

      document.getElementById("cityBill").value =
         document.getElementById("cityShip").value;

      document.getElementById("countryBill").value =
         document.getElementById("countryShip").value;

      document.getElementById("codeBill").value =
         document.getElementById("codeShip").value;

      // Copy dropdown (state)
      document.getElementById("stateBill").selectedIndex =
         document.getElementById("stateShip").selectedIndex;
   }
}


// VALIDATION SECTION

// Get all text inputs
let formElements = document.querySelectorAll("input[type='text']");

// Count fields
let fieldCount = formElements.length;

// Error box
let errorBox = document.getElementById("errorBox");

// Add invalid event to each field
for (let i = 0; i < fieldCount; i++) {
   formElements[i].addEventListener("invalid", showValidationError);
}

// Show error message
function showValidationError(evt) {

   // Stop browser popup bubbles
   evt.preventDefault();

   // Show custom message
   errorBox.textContent = "Complete all highlighted fields";
}