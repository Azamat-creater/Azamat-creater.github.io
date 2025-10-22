/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a hovered object
      Author: Your Name
      Date: 2025-10-22

      Filename: project02-03.js
 */

// Event handler for the square
document.getElementById("square").onmouseover = function() {
   document.getElementById("feedback").innerHTML = "You're hovering over the square";
};
document.getElementById("square").onmouseout = function() {
   document.getElementById("feedback").innerHTML = "";
};

// Event handler for the triangle
document.getElementById("triangle").onmouseover = function() {
   document.getElementById("feedback").innerHTML = "You're hovering over the triangle";
};
document.getElementById("triangle").onmouseout = function() {
   document.getElementById("feedback").innerHTML = "";
};

// Event handler for the circle
document.getElementById("circle").onmouseover = function() {
   document.getElementById("feedback").innerHTML = "You're hovering over the circle";
};
document.getElementById("circle").onmouseout = function() {
   document.getElementById("feedback").innerHTML = "";
};
