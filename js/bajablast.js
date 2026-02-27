// Baja Blast Functions
// Get the current date object and format it
const today = new Date();
const formattedDate = today.toDateString(); 

// Inject the formatted date into the HTML element with id="displayDate"
document.getElementById("displayDate").textContent = formattedDate; 

