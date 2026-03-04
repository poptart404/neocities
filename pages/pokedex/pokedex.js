const dbParam = JSON.stringify({table:"",limit:200});
const xmlhttpItem = new XMLHttpRequest();
var itemID = 0;
xmlhttpItem.onload = function() {
    // const myArr = JSON.parse(this.responseText);
    // const myObj2 = myArr[1];
    let x=0;
    const myObj2 = JSON.parse(this.responseText);
    let text = "<select class='blueButtonLong' id='demo3'>"
    for (let x in myObj2) {
        text += "<option>" + x + ". " + myObj2[x].name + "</option>";
    }
    text += "</select>"
    document.getElementById("demo3").innerHTML = text;
    // document.getElementById("demoID").innerHTML = x;
    itemID = x;
        console.log(itemID);

    }
xmlhttpItem.open("GET", "data.json", true);
xmlhttpItem.send();



/* When the user selects an option, update the display fields for that item */
function myFunction() {
  document.getElementById("myDropdown").classList.replace();// toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onselectionchange = function(e) {
  if (!e.target.matches('.blueButtons1')) {
    updateScreen(); 
    console.log(itemID);

    // document.getElementById("demoID").innerHTML = x;
    // var myDropdown = document.getElementById("myDropdown");
    //     if (myDropdown.classList.contains('show')) {
    //       myDropdown.classList.remove('show');
    //   }
  }
}

    function loadDetails() {
      const xmlhttpDetails = new XMLHttpRequest();
      const myItem = JSON.parse(this.responseText);
      // let textName = myObj[itemID].name;
      // let textFound = myObj[itemID].found;
      // let textSize = myObj[itemID].size;
      // let textURL = myObj[itemID].url;

      let textName = myItem[0].name;
      let textFound = myItem[0].found;
      let textSize = myItem[0].size;
      let textURL = myItem[0].url;

      document.getElementById("itemName").innerHTML = textName;
      document.getElementById("itemFound").innerHTML = textFound;
      document.getElementById("itemSize").innerHTML = textSize;
      document.getElementById("itemURL").innerHTML = textURL;

      // console.log(itemID);
      xmlhttpDetails.open("GET", "data.json", true);
      xmlhttpDetails.send();
      }//}
