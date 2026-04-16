"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Chapter case
      
      Eating Well in Season 
      Author: Azamat
      Date: 4/16/2026   
      
      Filename: js09b.js
 */
//get text string from address bar
let qString = location.search.slice(1);
//replase + with space
qString = qString.replace(/\+/g, " ");
qString = decodeURIComponent(qString);

//split string into field=name pairs in an array items
let formData = qString.split(/&/g);

for (let items of formData){
      //Extract the field names and values
      let fieldValuePair = items.split(/=/);
      let fieldName = fieldValuePair[0];
      let fieldValue = fieldValuePair[1];
      
      //make a label field name
      let fieldLabel = document.createElement("label");
      fieldLabel.textContent = fieldName;
      document.getElementById("contactInfo").appendChild(fieldLabel);

      //make input controls for field values
      let inputBox = document.createElement("input");
      inputBox.id = fieldName;
      inputBox.name = fieldName;
      inputBox.value = fieldValue;
      inputBox.disabled = true;
      document.getElementById("contactInfo").appendChild(inputBox);
}
//console.log(qString);

//store data to local storage after user click "sign up"
document.getElementById("signupBtn").onclick = function(){
      //data fields to be saved to local storage
      let formFields = document.querySelectorAll("#contactInfo input, input[type=radio], textarea");

      //
      for (let fields of formFields){
            localStorage.setItem(fields.name, fields.value);
      }
      console.log(localStorage);
}