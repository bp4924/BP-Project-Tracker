const timeDisplay = $("#timeDisplay");

let newTime;

function updateTime() {
  var nowTime = moment().format("LL") + " " + moment().format("LTS");
  timeDisplay.text(nowTime);
}

newTime = setInterval(updateTime, 1000);
