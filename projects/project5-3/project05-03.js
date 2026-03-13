"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      
      Author: Azamat
      Date: 3/13/2026  

      Filename: project05-03.js
*/

// Declare variables
let sourceDoc = document.getElementById("source_doc");
let toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

// Loop through each child element
for (let n = sourceDoc.firstElementChild; n !== null; n = n.nextElementSibling) {

   // Check if the node is an H2 heading
   if (n.nodeName === heading) {

      // Create anchor element
      let anchor = document.createElement("a");
      anchor.name = "doclink" + headingCount;

      // Insert anchor before first child of heading
      n.insertBefore(anchor, n.firstChild);

      // Create list item and link
      let listItem = document.createElement("li");
      let link = document.createElement("a");

      listItem.appendChild(link);

      // Set link text
      link.textContent = n.textContent;

      // Set link destination
      link.href = "#doclink" + headingCount;

      // Add list item to table of contents
      toc.appendChild(listItem);

      // Increase counter
      headingCount++;
   }
}