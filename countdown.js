function start() {
  console.log("Countdown Started");
  document.getElementById("startbutton").disabled = true;
  document.getElementById("stopbutton").disabled = false;
}
function stop() {
  console.log("Countdown Stopped");
  document.getElementById("stopbutton").disabled = true;
  document.getElementById("startbutton").disabled = false;
  location.replace("UATSpaceHome.html");
}
function countdowntimer() {
  var currTime = 50;
  for (var i = 0; i < 11; i++) {
    if (i == 10) {
      setTimeout(function () {
        document.getElementById("countdownstatus").innerHTML = "Blast Off!";
        currTime = currTime - 5;
      }, 5000 * i);
    } else if (i > 4) {
      setTimeout(function () {
        document.getElementById("countdownstatus").innerHTML =
          "WARNING: Less than half way to launch. Time left = " + currTime;
        currTime = currTime - 5;
      }, 5000 * i);
    } else {
      setTimeout(function () {
        document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime - 5;
      }, 5000 * i);
    }
  }
}
