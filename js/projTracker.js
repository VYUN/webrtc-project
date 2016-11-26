'use strict';

var videoInput = document.getElementById('vid');
var canvasInput = document.getElementById('compare');
var canvasOverlay = document.getElementById('overlay');
var overlayContext = canvasOverlay.getContext('2d');

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

document.addEventListener("facetrackingEvent", function( event ) {
  // clear canvas
  overlayContext.clearRect(0,0,320,240);
  // once we have stable tracking, draw rectangle
  if (event.detection == "CS") {
    // the Image
    var img = new Image();
    img.src = '/images/sample.png';
    // Not good enough in which filter won't placed correctly
    // Might have to use event engle, but need to understand the math
    img.onload = function(){
      overlayContext.drawImage(img, event.x-5, event.y-20, event.width*0.5, event.height*0.5);
    }

    // the rectangle
    overlayContext.translate(event.x, event.y);
    overlayContext.rotate(event.angle-(Math.PI/2));
    overlayContext.strokeStyle = "#00CC00";
    overlayContext.strokeRect((-(event.width/2)) >> 0, (-(event.height/2)) >> 0, event.width, event.height);
    overlayContext.rotate((Math.PI/2)-event.angle);
    overlayContext.translate(-event.x, -event.y);

  }
});
