"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Azamat
      Date: 3/13/2026  

      Filename: project05-02.js
*/

// HTML collection of all images
let images = document.getElementsByTagName("img");

// reference to photo bucket
let photoBucket = document.getElementById("photo_bucket");

// reference to ordered list
let photoList = document.getElementById("photo_list");

// loop through all images
for (let i = 0; i < images.length; i++) {

   images[i].onclick = function() {

      // if image is inside the bucket
      if (this.parentElement.id === "photo_bucket") {

         // create new list item
         let newItem = document.createElement("li");

         // add list item to photo list
         photoList.appendChild(newItem);

         // move image into the list item
         newItem.appendChild(this);

      } else {

         // get the list item containing the image
         let oldItem = this.parentElement;

         // move image back to bucket
         photoBucket.appendChild(this);

         // remove empty list item
         oldItem.parentElement.removeChild(oldItem);
      }
   };
}