// From https://dannarchy.com/tut/tut_002
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // DO SOMETHING
      var site_data = JSON.parse(this.responseText);
        // visit count
        // document.write(site_data.result)
        // document.getElementById("hitcount").innerHTML = site_data.info.views;
        var num_arr = site_data.info.views.toString().split("");
        var num_str = "";
        for (i = 0; i < num_arr.length; i++) {
        num_str += num_arr[i];
        if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
        }

        document.getElementById("hitcount").innerHTML = num_str;

        // last updated
        // var date_str = site_data.info.last_updated;
        // document.getElementById("lastupdate").innerHTML = date_str;

        var date_obj = new Date(site_data.info.last_updated);
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // document.getElementById("lastupdate").innerHTML = days[date_obj.getDay()] + " " + months[date_obj.getMonth()] + " " + date_obj.getDate() + ", " + date_obj.getFullYear();
        document.getElementById("lastupdate").innerHTML = months[date_obj.getMonth()] + " " + date_obj.getDate() + ", " + date_obj.getFullYear();
    }
    };
  xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=poptart404", true);
  xhttp.send();

