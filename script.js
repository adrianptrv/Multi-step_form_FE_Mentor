"use strict";
var _a, _b, _c, _d, _e, _f, _g;
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
const footerNext = document.querySelector(".footer-step");
var sum1;
//Next button function
function nextPage() {
    var _a, _b, _c, _d;
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
        if (((_a = document.querySelector("#r1")) === null || _a === void 0 ? void 0 : _a.checked) == false && ((_b = document.querySelector("#r2")) === null || _b === void 0 ? void 0 : _b.checked) == false && ((_c = document.querySelector("#r3")) === null || _c === void 0 ? void 0 : _c.checked) == false) {
            document.querySelector(".arcade-plan").style.borderColor = "hsl(354, 84%, 57%)";
            document.querySelector(".advanced-plan").style.borderColor = "hsl(354, 84%, 57%)";
            document.querySelector(".pro-plan").style.borderColor = "hsl(354, 84%, 57%)";
            document.querySelector(".err-msg").style.display = "block";
            setTimeout(() => {
                document.querySelector(".arcade-plan").style.borderColor = "unset";
                document.querySelector(".advanced-plan").style.borderColor = "unset";
                document.querySelector(".pro-plan").style.borderColor = "unset";
                document.querySelector(".err-msg").style.display = "none";
            }, 2000);
        }
        else {
            mySecondPage.style.display = "none";
            myThirdPage.style.display = "block";
            stepsCircle[2].style.backgroundColor = "hsl(206, 94%, 87%)";
            stepsText[2].style.color = "black";
            stepsCircle[1].style.backgroundColor = "unset";
            stepsText[1].style.color = "hsl(231, 100%, 99%)";
            pageNum++;
        }
    }
    else if (pageNum == 3) {
        myThirdPage.style.display = "none";
        myForthPage.style.display = "block";
        stepsCircle[3].style.backgroundColor = "hsl(206, 94%, 87%)";
        stepsText[3].style.color = "black";
        stepsCircle[2].style.backgroundColor = "unset";
        stepsText[2].style.color = "hsl(231, 100%, 99%)";
        //Change summary page button for finishing the form
        footerNext.classList.add("submit-page-next");
        footerNext.textContent = "Confirm";
        //Getting the total price of the plan + addons and displaying it on the summary page
        sum1 = Number(document.querySelector(".summ-line1").lastElementChild.textContent.replace(/[^0-9]/g, '')) + Number(document.querySelector(".summ-line2").lastElementChild.textContent.replace(/[^0-9]/g, '')) + Number(document.querySelector(".summ-line3").lastElementChild.textContent.replace(/[^0-9]/g, '')) + Number(document.querySelector(".summ-head").lastElementChild.textContent.replace(/[^0-9]/g, ''));
        //Checking if the it sohuld show year or months
        if (((_d = document.querySelector("#checkbox1")) === null || _d === void 0 ? void 0 : _d.checked) == true) {
            document.querySelector(".summ-total").firstElementChild.textContent = "Total (per year)";
            document.querySelector(".summ-total").lastElementChild.textContent = "$" + sum1 + "/yr";
        }
        else {
            document.querySelector(".summ-total").firstElementChild.textContent = "Total (per month)";
            document.querySelector(".summ-total").lastElementChild.textContent = "$" + sum1 + "/mo";
        }
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
        //Change back the summary page button for finishing the form
        footerNext.classList.remove("submit-page-next");
        footerNext.textContent = "Next Step";
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
//Function for going back to the plans page from the summary page
function bckPlans() {
    myForthPage.style.display = "none";
    mySecondPage.style.display = "block";
    stepsCircle[1].style.backgroundColor = "hsl(206, 94%, 87%)";
    stepsText[1].style.color = "black";
    stepsCircle[3].style.backgroundColor = "unset";
    stepsText[3].style.color = "hsl(231, 100%, 99%)";
    //Change back the summary page button for finishing the form
    footerNext.classList.remove("submit-page-next");
    footerNext.textContent = "Next Step";
    pageNum = 2;
}
//Change the text between month and year on the plans page 
(_a = document.querySelector('#checkbox1')) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { monthYearChange(this); });
function monthYearChange(checkBox) {
    var _a, _b, _c;
    if (checkBox.checked) {
        //Switch the color of the Monthly and Yearly words
        document.querySelector(".year-text").style.cssText = "font-weight: bold; color: hsl(213, 96%, 18%);";
        document.querySelector(".mon-text").style.cssText = "font-weight: unset; color: unset;";
        //Display the free months text
        document.querySelector("#arcade-free").style.display = "block";
        document.querySelector("#advanced-free").style.display = "block";
        document.querySelector("#pro-free").style.display = "block";
        //Change the price texts
        document.querySelector("#arcade-price").textContent = "$90/yr";
        document.querySelector("#advanced-price").textContent = "$120/yr";
        document.querySelector("#pro-price").textContent = "$150/yr";
        //Change add-ons price texts
        document.querySelector("#add-price1").textContent = "+$10/yr";
        document.querySelector("#add-price2").textContent = "+$20/yr";
        document.querySelector("#add-price3").textContent = "+$20/yr";
        //Chainging the Addons price texts on the summary page
        if (document.querySelector(".summ-line1").lastElementChild.textContent !== "") {
            document.querySelector(".summ-line1").lastElementChild.textContent = "+$10/yr";
        }
        if (document.querySelector(".summ-line2").lastElementChild.textContent !== "") {
            document.querySelector(".summ-line2").lastElementChild.textContent = "+$20/yr";
        }
        if (document.querySelector(".summ-line3").lastElementChild.textContent !== "") {
            document.querySelector(".summ-line3").lastElementChild.textContent = "+$20/yr";
        }
    }
    else {
        //Switch back the color of the Monthly and Yearly words
        document.querySelector(".year-text").style.cssText = "font-weight: unset; color: unset;";
        document.querySelector(".mon-text").style.cssText = "font-weight: bold; color: hsl(213, 96%, 18%);";
        //Hide the free months text
        document.querySelector("#arcade-free").style.display = "none";
        document.querySelector("#advanced-free").style.display = "none";
        document.querySelector("#pro-free").style.display = "none";
        //Change the price texts
        document.querySelector("#arcade-price").textContent = "$9/mo";
        document.querySelector("#advanced-price").textContent = "$12/mo";
        document.querySelector("#pro-price").textContent = "$15/mo";
        //Change add-ons price texts
        document.querySelector("#add-price1").textContent = "+$1/mo";
        document.querySelector("#add-price2").textContent = "+$2/mo";
        document.querySelector("#add-price3").textContent = "+$2/mo";
        //Chainging the Addons price texts on the summary page
        if (document.querySelector(".summ-line1").lastElementChild.textContent !== "") {
            document.querySelector(".summ-line1").lastElementChild.textContent = "+$1/mo";
        }
        if (document.querySelector(".summ-line2").lastElementChild.textContent !== "") {
            document.querySelector(".summ-line2").lastElementChild.textContent = "+$2/mo";
        }
        if (document.querySelector(".summ-line3").lastElementChild.textContent !== "") {
            document.querySelector(".summ-line3").lastElementChild.textContent = "+$2/mo";
        }
    }
    //Check if a plan is already selected and if its, chainge it content to yearly 
    if (document.querySelector("#r1").checked == true) {
        (_a = document.querySelector("#r1")) === null || _a === void 0 ? void 0 : _a.click();
    }
    else if (document.querySelector("#r2").checked == true) {
        (_b = document.querySelector("#r2")) === null || _b === void 0 ? void 0 : _b.click();
    }
    else if (document.querySelector("#r3").checked == true) {
        (_c = document.querySelector("#r3")) === null || _c === void 0 ? void 0 : _c.click();
    }
}
(_b = document.querySelector("#r1-label")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { addPlan(this); });
(_c = document.querySelector("#r2-label")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { addPlan(this); });
(_d = document.querySelector("#r3-label")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () { addPlan(this); });
function addPlan(el) {
    var _a;
    var planHead = el.childNodes[5].childNodes[1].textContent;
    var planPrice = el.childNodes[5].childNodes[3].textContent;
    if (((_a = document.querySelector("#checkbox1")) === null || _a === void 0 ? void 0 : _a.checked) == true) {
        document.querySelector(".summ-head").firstElementChild.textContent = planHead + " " + "(Yearly)";
    }
    else {
        document.querySelector(".summ-head").firstElementChild.textContent = planHead + " " + "(Monthly)";
    }
    document.querySelector(".summ-head").lastElementChild.textContent = planPrice;
}
(_e = document.querySelector("#first-opt-lab")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () { addAddOn(this); });
(_f = document.querySelector("#second-opt-lab")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () { addAddOn(this); });
(_g = document.querySelector("#third-opt-lab")) === null || _g === void 0 ? void 0 : _g.addEventListener("click", function () { addAddOn(this); });
function addAddOn(el) {
    var addHead = el.firstElementChild.childNodes[3].firstElementChild.textContent;
    var addPrice = el.firstElementChild.lastElementChild.textContent;
    if (el.childNodes[1].childNodes[1].checked == true) {
        if (addHead == "Online service") {
            document.querySelector(".summ-line1").firstElementChild.textContent = addHead;
            document.querySelector(".summ-line1").lastElementChild.textContent = addPrice;
        }
        else if (addHead == "Larger storage") {
            document.querySelector(".summ-line2").firstElementChild.textContent = addHead;
            document.querySelector(".summ-line2").lastElementChild.textContent = addPrice;
        }
        else if (addHead == "Customizable profile") {
            document.querySelector(".summ-line3").firstElementChild.textContent = addHead;
            document.querySelector(".summ-line3").lastElementChild.textContent = addPrice;
        }
    }
    else if (el.childNodes[1].childNodes[1].checked == false) {
        if (addHead == "Online service") {
            document.querySelector(".summ-line1").firstElementChild.textContent = "";
            document.querySelector(".summ-line1").lastElementChild.textContent = "";
        }
        else if (addHead == "Larger storage") {
            document.querySelector(".summ-line2").firstElementChild.textContent = "";
            document.querySelector(".summ-line2").lastElementChild.textContent = "";
        }
        else if (addHead == "Customizable profile") {
            document.querySelector(".summ-line3").firstElementChild.textContent = "";
            document.querySelector(".summ-line3").lastElementChild.textContent = "";
        }
    }
}
