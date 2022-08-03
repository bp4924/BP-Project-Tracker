const timeDisplayEl = $("#timeDisplay");
const projectNameEl = $(".project-name");
const projectTypeEl = $(".project-type");
const projectRateEl = $(".project-rate");
const projectDateEl = $(".project-date");

let newTime;

function updateTime() {
  var nowTime = moment().format("LL") + " " + moment().format("LTS");
  timeDisplay.text(nowTime);
}

newTime = setInterval(updateTime, 1000);
