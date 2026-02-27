// Baja Blast Functions

// Get the current date object and format it
const today = new Date();
const formattedDate = today.toDateString(); 

// Return Variables to HTML
// Inject the formatted date into the HTML element with id="displayDate"
document.getElementById("displayDate").textContent = formattedDate; 


// Calculate number of baja blasts so far this year
yearStart = new Date(new Date().getFullYear(), 0, 1);
dayCount = daysPassed(today,yearStart);

// Return Variables to HTML
document.getElementById("daysYear").textContent = dayCount;
