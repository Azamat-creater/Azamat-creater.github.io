"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Azamat
      Date: 4/14/2026   

      Filename: project08-04.js
*/

let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function() {
   let JSONfile = this.files[0];

   let fr = new FileReader();
   fr.readAsText(JSONfile); 

   fr.onload = function(){ 
      //Convert JSON text into object
      let staff = JSON.parse(fr.result);

      //Build the table
      makeStaffTable(staff);
   }
};

function makeStaffTable(staff) {
   let staffTable = document.createElement("table");
   let headerRow = document.createElement("tr");

   //Step 5: Create header row
   for (let prop in staff.directory[0]) {
      let headerCell = document.createElement("th");
      headerCell.textContent = prop;
      headerRow.appendChild(headerCell);
   }

   staffTable.appendChild(headerRow);

   //Step 6: Create rows for each employee
   for (let i = 0; i < staff.directory.length; i++) {
      let tableRow = document.createElement("tr");

      for (let prop in staff.directory[i]) {
         let tableCell = document.createElement("td");
         tableCell.textContent = staff.directory[i][prop];
         tableRow.appendChild(tableCell);
      }

      staffTable.appendChild(tableRow);
   }

   //Step 7: Add table to page
   containerBox.appendChild(staffTable);
}