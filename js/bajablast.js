// Baja Blast Functions

// Get the current date object and format it
    const today = new Date();
    const formattedDate = today.toDateString(); 

    // Return Variables to HTML
    document.getElementById("displayDate").textContent = formattedDate; 


// Calculate number of baja blasts so far this year
    yearStart = new Date(new Date().getFullYear(), 0, 1);
    dayCount = daysPassed(today,yearStart);

    // Return Variables to HTML
    // document.getElementById("daysYear").textContent = dayCount;



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
const smolButton = document.getElementById('interactive-button');

interactiveButton.addEventListener('click', function() {
    feedBajaBlast(smolButton);
});

function feedBajaBlast(){
    addNumber = addNumber +1 
    localStorage.setItem('counter', addNumber);
}

// function feedBajaBlast() {
//     // const bajaCount = document.createElement('div');
//     // bajaCount.classList.add('bajaCount');

//     // const increment = document.getElementById('increment')
//     let counter = document.getElementById('counter')

//     increment.addEventListener('click', () => {
//     increment.disabled = false

//     fetch('./increment.php')
//         .then(response => response.text())
//         .then(count => {
//         counter.textContent = count
//         })
//         .catch(error => {
//         counter.textContent = error
//         })
//         .finally(() => {
//         increment.disabled = false
//         })
//     })
    
    // }