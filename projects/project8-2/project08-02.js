"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: Azamat
      Date: 4/14/2026    

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60;
const BOX_HEIGHT = 400;
const BOX_WIDTH = 800;

/*--------------- Object Code --------------------*/

// Container object
let box = {
   width: BOX_WIDTH,
   height: BOX_HEIGHT,
   xPos: 0,
   yPos: 0
};

// Ball constructor
function ball(size) {
   this.radius = size;
   this.xPos = null;
   this.yPos = null;
   this.xVelocity = null;
   this.yVelocity = null;
}

// Method to move ball inside container
ball.prototype.moveWithin = function(container) {

   let ballTop = this.yPos;
   let ballLeft = this.xPos;
   let ballBottom = this.yPos + this.radius;
   let ballRight = this.xPos + this.radius;

   // Vertical bounce
   if (ballTop < 0 || ballBottom > container.height) {
      container.yPos += this.yVelocity;
      this.yVelocity = -this.yVelocity;
   }

   // Horizontal bounce
   if (ballLeft < 0 || ballRight > container.width) {
      container.xPos += this.xVelocity;
      this.xVelocity = -this.xVelocity;
   }

   // Move ball
   this.yPos += this.yVelocity;
   this.xPos += this.xVelocity;
};


/*--------------- Interface Code -----------------*/

// Container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px";

// Button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {
      
   let ballImage = document.createElement("div");
   ballImage.className = "ball";
   ballImage.style.width = BALL_RADIUS + "px";

   // Create ball object
   let newBall = new ball(BALL_RADIUS);

   // Center ball
   newBall.xPos = (BOX_WIDTH - BALL_RADIUS) / 2;
   newBall.yPos = (BOX_HEIGHT - BALL_RADIUS) / 2;

   ballImage.style.left = newBall.xPos + "px";
   ballImage.style.top = newBall.yPos + "px";

   // Random velocity
   newBall.xVelocity = rand(-10, 10);
   newBall.yVelocity = rand(-10, 10);

   // Add to box
   boxImage.appendChild(ballImage);

   // Animate
   window.setInterval(function() {

      newBall.moveWithin(box);

      // Move ball
      ballImage.style.top = newBall.yPos + "px";
      ballImage.style.left = newBall.xPos + "px";

      // Move container (shake effect)
      boxImage.style.top = box.yPos + "px";
      boxImage.style.left = box.xPos + "px";

   }, 25);
};


// Random number function
function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return minVal + size * Math.random();
}