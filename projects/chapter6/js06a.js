"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Azamat
      Date: 3/17/2026   

      Filename: js06a.js
 */

window.addEventListener("load", function(){
      let orderForm = this.document.forms.orderForm;
      let model = orderForm.elements.model;

      //select model list
      model.focus();

      //adding event listeners to every element on form
      for(let i = 0; i < orderForm.elements.length; i++)
            orderForm.elements[i].addEventListener("change", calcOrder);

      //calculate order cost
      calcOrder();

      function calcOrder(){
            //which model was selected
            let mIndex = model.selectedIndex;
            let mValue = model.options[mIndex].value;

            //quantity selected
            let qIndex = orderForm.elements.qty.selectedIndex;
            let quantity = orderForm.elements.qty[qIndex].value;

            //calc model cost
            let modelCost = mValue * quantity;
            orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            //protection plan
            let planValue = document.querySelector('input[name="plan"]:checked').value;
            let palnCost = planValue * quantity;
            orderForm.elements.planCost.value = palnCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            //subtotal
            let subtotal = modelCost + palnCost;
            orderForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {style: "currency", currency: "USD"});

            //tax
            let salesTax = subtotal * .05;
            orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {style: "currency", currency: "USD"});

            //total cost
            let totalCost = subtotal + salesTax;
            orderForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});

            //hidden values
            orderForm.elements.modelName.value = model.options[mIndex].text;
            let selectedPlan = document.querySelector('input[name="plan"]:checked');
            orderForm.elements.planName.value = selectedPlan.labels[0].textContent;
      }
});

