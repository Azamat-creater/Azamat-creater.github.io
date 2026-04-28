"use strict";

/*  JavaScript 7th Edition
    Chapter 12
    Chapter case

    Bonsai Expressions FAQ 
    Author: Azamat
    Date: 4/28/2026  

    Filename: js12.js
*/

//Run when page is ready 
$( () => {
    //animate h1 
    $("section > h1").css({
        fontSize: 0,
        opacity: 0
    })
    .animate({
        fontSize: "2.3em",
        opacity: 1
    }, 600);

    //reveal question when page opens
    $("dl#faq")
    .hide()
    .effect("clip", {
        mode: "show",
        direction: "horizontal"
    }, 600);

    //click event for questions
   $("dl#faq dt").click( e => {
    //alternate between hiding and showing answers
    let question = $(e.target);
    let answer = $(question.next());
    $(question).toggleClass("hiddenAnswer");

    if ($(question).hasClass("hiddenAnswer")) {
        $(answer).slideUp(600);
    } else {
        $(answer).slideDown(600);
    }
   }); 
});
