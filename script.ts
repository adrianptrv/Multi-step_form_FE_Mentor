//Variable used for indicating the page we are on, by default it's 1
var pageNum: number = 1;

const myFirstPage = document.querySelector<HTMLDivElement>(".first-info");
const mySecondPage = document.querySelector<HTMLDivElement>(".second-info");
const myThirdPage = document.querySelector<HTMLDivElement>(".third-info");
const myForthPage = document.querySelector<HTMLDivElement>(".fourth-info");
const myThanksPage = document.querySelector<HTMLDivElement>(".thanks-info");
const footerWrapper = document.querySelector<HTMLDivElement>(".button-wrapper");
const backBtn = document.querySelector<HTMLButtonElement>(".back-step");
const stepsCircle = document.querySelectorAll<HTMLAnchorElement>("#numCirc");
const stepsText = document.querySelectorAll<HTMLSpanElement>("#numText");
const footerNext = document.querySelector<HTMLElement>(".footer-step");


var sum1: any;

//Next button function
function nextPage() {
    //Check on which page we are currently
    if (pageNum == 1) {
        //Change Page
        myFirstPage!.style.display = "none";
        mySecondPage!.style.display = "block";
        // Display button
        backBtn!.style.display = "block";
        footerWrapper!.style.justifyContent = "space-between";
        // Change circle style to the next page
        stepsCircle[1].style.backgroundColor = "hsl(206, 94%, 87%)"
        stepsText[1].style.color = "black"
        stepsCircle[0].style.backgroundColor = "unset"
        stepsText[0].style.color = "hsl(231, 100%, 99%)"
        // Add plus one to the page counter
        pageNum++;
    }
    else if (pageNum == 2) {
        if (document.querySelector<HTMLInputElement>("#r1")?.checked == false && document.querySelector<HTMLInputElement>("#r2")?.checked == false && document.querySelector<HTMLInputElement>("#r3")?.checked == false) {

            document.querySelector<HTMLDivElement>(".arcade-plan")!.style.borderColor = "hsl(354, 84%, 57%)"
            document.querySelector<HTMLDivElement>(".advanced-plan")!.style.borderColor = "hsl(354, 84%, 57%)"
            document.querySelector<HTMLDivElement>(".pro-plan")!.style.borderColor = "hsl(354, 84%, 57%)"
            document.querySelector<HTMLParagraphElement>(".err-msg")!.style.display = "block";
            setTimeout(() => {
                document.querySelector<HTMLDivElement>(".arcade-plan")!.style.borderColor = "unset";
                document.querySelector<HTMLDivElement>(".advanced-plan")!.style.borderColor = "unset";
                document.querySelector<HTMLDivElement>(".pro-plan")!.style.borderColor = "unset";
                document.querySelector<HTMLParagraphElement>(".err-msg")!.style.display = "none";
            }
                , 2000);
        }
        else {
            mySecondPage!.style.display = "none";
            myThirdPage!.style.display = "block";
            stepsCircle[2].style.backgroundColor = "hsl(206, 94%, 87%)"
            stepsText[2].style.color = "black"
            stepsCircle[1].style.backgroundColor = "unset"
            stepsText[1].style.color = "hsl(231, 100%, 99%)"
            pageNum++;
        }
    }
    else if (pageNum == 3) {


        myThirdPage!.style.display = "none";
        myForthPage!.style.display = "block";
        stepsCircle[3].style.backgroundColor = "hsl(206, 94%, 87%)";
        stepsText[3].style.color = "black";
        stepsCircle[2].style.backgroundColor = "unset";
        stepsText[2].style.color = "hsl(231, 100%, 99%)";
        //Change summary page button for finishing the form
        footerNext!.classList.add("submit-page-next");
        footerNext!.textContent = "Confirm"

        //Getting the total price of the plan + addons and displaying it on the summary page
        sum1 = Number(document.querySelector<HTMLDivElement>(".summ-line1")!.lastElementChild!.textContent!.replace(/[^0-9]/g, '')) + Number(document.querySelector<HTMLDivElement>(".summ-line2")!.lastElementChild!.textContent!.replace(/[^0-9]/g, '')) + Number(document.querySelector<HTMLDivElement>(".summ-line3")!.lastElementChild!.textContent!.replace(/[^0-9]/g, '')) + Number(document.querySelector<HTMLDivElement>(".summ-head")!.lastElementChild!.textContent!.replace(/[^0-9]/g, ''))

        //Checking if the it sohuld show year or months
        if (document.querySelector<HTMLInputElement>("#checkbox1")?.checked == true) {
            document.querySelector<HTMLDivElement>(".summ-total")!.firstElementChild!.textContent = "Total (per year)"
            document.querySelector<HTMLDivElement>(".summ-total")!.lastElementChild!.textContent = "$" + sum1 + "/yr"
        }
        else {
            document.querySelector<HTMLDivElement>(".summ-total")!.firstElementChild!.textContent = "Total (per month)"
            document.querySelector<HTMLDivElement>(".summ-total")!.lastElementChild!.textContent = "$" + sum1 + "/mo"
        }
        pageNum++;
    }
    else if (pageNum == 4) {
        myForthPage!.style.display = "none";
        myThanksPage!.style.display = "block";
        footerWrapper!.style.display = "none";
    }
}

//Back button function
function backPage() {
    if (pageNum == 4) {
        myForthPage!.style.display = "none";
        myThirdPage!.style.display = "block";
        stepsCircle[2].style.backgroundColor = "hsl(206, 94%, 87%)"
        stepsText[2].style.color = "black"
        stepsCircle[3].style.backgroundColor = "unset"
        stepsText[3].style.color = "hsl(231, 100%, 99%)"
        //Change back the summary page button for finishing the form
        footerNext!.classList.remove("submit-page-next");
        footerNext!.textContent = "Next Step"
        pageNum--;
    }
    else if (pageNum == 3) {
        myThirdPage!.style.display = "none";
        mySecondPage!.style.display = "block";
        stepsCircle[1].style.backgroundColor = "hsl(206, 94%, 87%)"
        stepsText[1].style.color = "black"
        stepsCircle[2].style.backgroundColor = "unset"
        stepsText[2].style.color = "hsl(231, 100%, 99%)"
        pageNum--;
    }
    else if (pageNum == 2) {
        mySecondPage!.style.display = "none";
        myFirstPage!.style.display = "block";
        backBtn!.style.display = "none";
        footerWrapper!.style.justifyContent = "flex-end";
        stepsCircle[0].style.backgroundColor = "hsl(206, 94%, 87%)"
        stepsText[0].style.color = "black"
        stepsCircle[1].style.backgroundColor = "unset"
        stepsText[1].style.color = "hsl(231, 100%, 99%)"
        pageNum--;
    }

}

//Function for going back to the plans page from the summary page
function bckPlans() {
    myForthPage!.style.display = "none";
    mySecondPage!.style.display = "block";
    stepsCircle[1].style.backgroundColor = "hsl(206, 94%, 87%)"
    stepsText[1].style.color = "black"
    stepsCircle[3].style.backgroundColor = "unset"
    stepsText[3].style.color = "hsl(231, 100%, 99%)"
    //Change back the summary page button for finishing the form
    footerNext!.classList.remove("submit-page-next");
    footerNext!.textContent = "Next Step"
    pageNum = 2;
}

//Change the text between month and year on the plans page 
document.querySelector<HTMLInputElement>('#checkbox1')?.addEventListener("click", function () { monthYearChange(this) })

function monthYearChange(checkBox: any) {
    if (checkBox.checked) {
        //Switch the color of the Monthly and Yearly words
        document.querySelector<HTMLSpanElement>(".year-text")!.style.cssText = "font-weight: bold; color: hsl(213, 96%, 18%);"
        document.querySelector<HTMLSpanElement>(".mon-text")!.style.cssText = "font-weight: unset; color: unset;"
        //Display the free months text
        document.querySelector<HTMLParagraphElement>("#arcade-free")!.style.display = "block"
        document.querySelector<HTMLParagraphElement>("#advanced-free")!.style.display = "block"
        document.querySelector<HTMLParagraphElement>("#pro-free")!.style.display = "block"
        //Change the price texts
        document.querySelector<HTMLParagraphElement>("#arcade-price")!.textContent = "$90/yr"
        document.querySelector<HTMLParagraphElement>("#advanced-price")!.textContent = "$120/yr"
        document.querySelector<HTMLParagraphElement>("#pro-price")!.textContent = "$150/yr"
        //Change add-ons price texts
        document.querySelector<HTMLParagraphElement>("#add-price1")!.textContent = "+$10/yr"
        document.querySelector<HTMLParagraphElement>("#add-price2")!.textContent = "+$20/yr"
        document.querySelector<HTMLParagraphElement>("#add-price3")!.textContent = "+$20/yr"

        //Chainging the Addons price texts on the summary page
        if (document.querySelector<HTMLDivElement>(".summ-line1")!.lastElementChild!.textContent !== "") {
            document.querySelector<HTMLDivElement>(".summ-line1")!.lastElementChild!.textContent = "+$10/yr"
        }

        if (document.querySelector<HTMLDivElement>(".summ-line2")!.lastElementChild!.textContent !== "") {
            document.querySelector<HTMLDivElement>(".summ-line2")!.lastElementChild!.textContent = "+$20/yr"
        }
        if (document.querySelector<HTMLDivElement>(".summ-line3")!.lastElementChild!.textContent !== "") {
            document.querySelector<HTMLDivElement>(".summ-line3")!.lastElementChild!.textContent = "+$20/yr"
        }

    }
    else {
        //Switch back the color of the Monthly and Yearly words
        document.querySelector<HTMLSpanElement>(".year-text")!.style.cssText = "font-weight: unset; color: unset;"
        document.querySelector<HTMLSpanElement>(".mon-text")!.style.cssText = "font-weight: bold; color: hsl(213, 96%, 18%);"
        //Hide the free months text
        document.querySelector<HTMLParagraphElement>("#arcade-free")!.style.display = "none"
        document.querySelector<HTMLParagraphElement>("#advanced-free")!.style.display = "none"
        document.querySelector<HTMLParagraphElement>("#pro-free")!.style.display = "none"
        //Change the price texts
        document.querySelector<HTMLParagraphElement>("#arcade-price")!.textContent = "$9/mo"
        document.querySelector<HTMLParagraphElement>("#advanced-price")!.textContent = "$12/mo"
        document.querySelector<HTMLParagraphElement>("#pro-price")!.textContent = "$15/mo"
        //Change add-ons price texts
        document.querySelector<HTMLParagraphElement>("#add-price1")!.textContent = "+$1/mo"
        document.querySelector<HTMLParagraphElement>("#add-price2")!.textContent = "+$2/mo"
        document.querySelector<HTMLParagraphElement>("#add-price3")!.textContent = "+$2/mo"

        //Chainging the Addons price texts on the summary page
        if (document.querySelector<HTMLDivElement>(".summ-line1")!.lastElementChild!.textContent !== "") {
            document.querySelector<HTMLDivElement>(".summ-line1")!.lastElementChild!.textContent = "+$1/mo"
        }

        if (document.querySelector<HTMLDivElement>(".summ-line2")!.lastElementChild!.textContent !== "") {
            document.querySelector<HTMLDivElement>(".summ-line2")!.lastElementChild!.textContent = "+$2/mo"
        }
        if (document.querySelector<HTMLDivElement>(".summ-line3")!.lastElementChild!.textContent !== "") {
            document.querySelector<HTMLDivElement>(".summ-line3")!.lastElementChild!.textContent = "+$2/mo"
        }

    }

    //Check if a plan is already selected and if its, chainge it content to yearly 
    if (document.querySelector<HTMLInputElement>("#r1")!.checked == true) {
        document.querySelector<HTMLInputElement>("#r1")?.click();
    }
    else if (document.querySelector<HTMLInputElement>("#r2")!.checked == true) {
        document.querySelector<HTMLInputElement>("#r2")?.click();
    }
    else if (document.querySelector<HTMLInputElement>("#r3")!.checked == true) {
        document.querySelector<HTMLInputElement>("#r3")?.click();
    }

}


document.querySelector<HTMLLabelElement>("#r1-label")?.addEventListener("click", function () { addPlan(this) })
document.querySelector<HTMLLabelElement>("#r2-label")?.addEventListener("click", function () { addPlan(this) })
document.querySelector<HTMLLabelElement>("#r3-label")?.addEventListener("click", function () { addPlan(this) })


function addPlan(el: any) {
    var planHead: string = el.childNodes[5].childNodes[1].textContent;
    var planPrice: string = el.childNodes[5].childNodes[3].textContent;

    if (document.querySelector<HTMLInputElement>("#checkbox1")?.checked == true) {
        document.querySelector<HTMLDivElement>(".summ-head")!.firstElementChild!.textContent = planHead + " " + "(Yearly)";
    }
    else {
        document.querySelector<HTMLDivElement>(".summ-head")!.firstElementChild!.textContent = planHead + " " + "(Monthly)";
    }
    document.querySelector<HTMLDivElement>(".summ-head")!.lastElementChild!.textContent = planPrice;
}


document.querySelector<HTMLLabelElement>("#first-opt-lab")?.addEventListener("click", function () { addAddOn(this) })
document.querySelector<HTMLLabelElement>("#second-opt-lab")?.addEventListener("click", function () { addAddOn(this) })
document.querySelector<HTMLLabelElement>("#third-opt-lab")?.addEventListener("click", function () { addAddOn(this) })

function addAddOn(el: any) {
    var addHead: string = el.firstElementChild.childNodes[3].firstElementChild.textContent;
    var addPrice: string = el.firstElementChild.lastElementChild.textContent;

    if (el.childNodes[1].childNodes[1].checked == true) {
        if (addHead == "Online service") {
            document.querySelector<HTMLDivElement>(".summ-line1")!.firstElementChild!.textContent = addHead;
            document.querySelector<HTMLDivElement>(".summ-line1")!.lastElementChild!.textContent = addPrice;
        }
        else if (addHead == "Larger storage") {
            document.querySelector<HTMLDivElement>(".summ-line2")!.firstElementChild!.textContent = addHead;
            document.querySelector<HTMLDivElement>(".summ-line2")!.lastElementChild!.textContent = addPrice;
        }
        else if (addHead == "Customizable profile") {
            document.querySelector<HTMLDivElement>(".summ-line3")!.firstElementChild!.textContent = addHead;
            document.querySelector<HTMLDivElement>(".summ-line3")!.lastElementChild!.textContent = addPrice;
        }
    }
    else if (el.childNodes[1].childNodes[1].checked == false) {
        if (addHead == "Online service") {
            document.querySelector<HTMLDivElement>(".summ-line1")!.firstElementChild!.textContent = "";
            document.querySelector<HTMLDivElement>(".summ-line1")!.lastElementChild!.textContent = "";
        }
        else if (addHead == "Larger storage") {
            document.querySelector<HTMLDivElement>(".summ-line2")!.firstElementChild!.textContent = "";
            document.querySelector<HTMLDivElement>(".summ-line2")!.lastElementChild!.textContent = "";
        }
        else if (addHead == "Customizable profile") {
            document.querySelector<HTMLDivElement>(".summ-line3")!.firstElementChild!.textContent = "";
            document.querySelector<HTMLDivElement>(".summ-line3")!.lastElementChild!.textContent = "";
        }
    }
}