// Baja Blast Functions

// Get the current date object and format it
    // const today = new Date();
    // const formattedDate = today.toDateString(); 

    // // Return Variables to HTML
    // document.getElementById("displayDate").textContent = formattedDate; 

// // Calculate number of baja blasts so far this year
//     yearStart = new Date(new Date().getFullYear(), 0, 1);
//     dayCount = daysPassed(today,yearStart);

// Is Poptart having a baja blast?
const state = Math.round(Math.random());
let blast = "Poptart is experiencing Schrodinger's Baja Blast, please stand by.";
let blastImg = "/image/poptart.png";
if (state == 0) {
    blast = "Poptart is not having a Baja Blast";
    blastImg = "/image/baja-sad-cat.gif";
}
else if (state == 1) {
    blast = "Poptart is having a Baja Blast";
    blastImg = "/image/baja-happy-cat.gif";
}
else {
    blast = "Poptart is experiencing Schrodinger's Baja Blast, please stand by.";
    blastImg = "/image/poptart.png";
}

// Return Variables to HTML
document.getElementById("isBlast").textContent = blast;
const blastElement = document.getElementById("blastImg");
blastElement.src = blastImg;

// Feed Baja Blast Function
// Initialize count
const x = document.getElementById("result");
if (localStorage.clickcount) {
    x.innerHTML = Number(localStorage.clickcount);
}
else {
    x.innerHTML = Number(1);
}

// Increment count function
function clickCounter() {
    const x = document.getElementById("result");
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
            } 
        else {
            localStorage.clickcount = 1;
            }
        x.innerHTML = localStorage.clickcount;
        } 
    else {
        x.innerHTML = "Sorry, no Web storage support!";
        }
    }