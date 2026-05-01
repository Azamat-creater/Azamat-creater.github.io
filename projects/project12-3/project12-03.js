"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Azamat
      Date: 5/1/2026    

      Filename: project12-03.js
*/

$(document).ready(function() {

   $("article > h2").click(function() {

      // Reference the clicked heading
      let heading = $(this);

      // Reference the next sibling (ul or ol)
      let list = heading.next();

      // Reference the image inside the heading
      let headingImage = heading.children("img");

      // Toggle the list with sliding effect (0.5 seconds)
      list.slideToggle(500);

      // Get current image source
      let imgSrc = headingImage.attr("src");

      // Switch between plus and minus images
      if (imgSrc === "plus.png") {
         headingImage.attr("src", "minus.png");
      } else {
         headingImage.attr("src", "plus.png");
      }

   });

});

