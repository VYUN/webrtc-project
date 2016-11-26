'use strict';

var videoInput = document.getElementById('vid');
var canvasInput = document.getElementById('compare');

document.addEventListener("headtrackrStatus", function(event) {
  if (event.status == "found") {
    console.log("found face");
    document.getElementById("snap").disabled = false;
    document.getElementById("send").disabled = false;
    document.getElementById("snapAndSend").disabled = false;
  }
  else {
    console.log("face unknown");
    document.getElementById("snap").disabled = true;
    document.getElementById("send").disabled = true;
    document.getElementById("snapAndSend").disabled = true;
  }
}, true);

var htracker = new headtrackr.Tracker({calcAngles : true, ui : false, headPosition : false});
htracker.init(videoInput, canvasInput);
htracker.start();
