"use strict";
//Variable used for indicating the page we are on, by default it's 1
var pageNum = 1;
const myFirstPage = document.querySelector(".first-info");
const mySecondPage = document.querySelector(".second-info");
const myThirdPage = document.querySelector(".third-info");
const myForthPage = document.querySelector(".fourth-info");
const myThanksPage = document.querySelector(".thanks-info");
const footerWrapper = document.querySelector(".button-wrapper");
const backBtn = document.querySelector(".back-step");
const stepsCircle = document.querySelectorAll("#numCirc");
const stepsText = document.querySelectorAll("#numText");
//Next button function
function nextPage() {
    //Check on which page we are currently
    if (pageNum == 1) {
        //Change Page
        myFirstPage.style.display = "none";
        mySecondPage.style.display = "block";
        // Display button
        backBtn.style.display = "block";
        footerWrapper.style.justifyContent = "space-between";
        // Change circle style to the next page
        stepsCircle[1].style.backgroundColor = "hsl(206, 94%, 87%)";
        stepsText[1].style.color = "black";
        stepsCircle[0].style.backgroundColor = "unset";
        stepsText[0].style.color = "hsl(231, 100%, 99%)";
        // Add plus one to the page counter
        pageNum++;
    }
    else if (pageNum == 2) {
        mySecondPage.style.display = "none";
        myThirdPage.style.display = "block";
        stepsCircle[2].style.backgroundColor = "hsl(206, 94%, 87%)";
        stepsText[2].style.color = "black";
        stepsCircle[1].style.backgroundColor = "unset";
        stepsText[1].style.color = "hsl(231, 100%, 99%)";
        pageNum++;
    }
    else if (pageNum == 3) {
        myThirdPage.style.display = "none";
        myForthPage.style.display = "block";
        stepsCircle[3].style.backgroundColor = "hsl(206, 94%, 87%)";
        stepsText[3].style.color = "black";
        stepsCircle[2].style.backgroundColor = "unset";
        stepsText[2].style.color = "hsl(231, 100%, 99%)";
        pageNum++;
    }
    else if (pageNum == 4) {
        myForthPage.style.display = "none";
        myThanksPage.style.display = "block";
        footerWrapper.style.display = "none";
    }
}
//Back button function
function backPage() {
    if (pageNum == 4) {
        myForthPage.style.display = "none";
        myThirdPage.style.display = "block";
        stepsCircle[2].style.backgroundColor = "hsl(206, 94%, 87%)";
        stepsText[2].style.color = "black";
        stepsCircle[3].style.backgroundColor = "unset";
        stepsText[3].style.color = "hsl(231, 100%, 99%)";
        pageNum--;
    }
    else if (pageNum == 3) {
        myThirdPage.style.display = "none";
        mySecondPage.style.display = "block";
        stepsCircle[1].style.backgroundColor = "hsl(206, 94%, 87%)";
        stepsText[1].style.color = "black";
        stepsCircle[2].style.backgroundColor = "unset";
        stepsText[2].style.color = "hsl(231, 100%, 99%)";
        pageNum--;
    }
    else if (pageNum == 2) {
        mySecondPage.style.display = "none";
        myFirstPage.style.display = "block";
        backBtn.style.display = "none";
        footerWrapper.style.justifyContent = "flex-end";
        stepsCircle[0].style.backgroundColor = "hsl(206, 94%, 87%)";
        stepsText[0].style.color = "black";
        stepsCircle[1].style.backgroundColor = "unset";
        stepsText[1].style.color = "hsl(231, 100%, 99%)";
        pageNum--;
    }
}
