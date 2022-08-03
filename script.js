const timeDisplayEl = $("#timeDisplay");
const projectNameEl = $(".project-name");
const projectTypeEl = $(".project-type");
const projectRateEl = $(".project-rate");
const projectDateEl = $(".project-date");
const saveButton = $(".btn-save");

//let form = $(".modal-form");
console.log(saveButton);

let newTime;

$(function () {
  $(".project-date").datepicker({
    minDate: moment().add(10, "days").calendar(),
  });
});

function updateTime() {
  var nowTime = moment().format("LL") + " " + moment().format("LTS");
  timeDisplayEl.text(nowTime);
}

newTime = setInterval(updateTime, 1000);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});

const submit = () => {
  let name = projectNameEl.value;
  let type = projectTypeEl.value;
  let rate = projectRateEl.value;
  let date = projectDateEl.value;
  let due;
  let earn;

  let newArray = [name, type, rate, date, due, earn];
  newArray.forEach((item) => {
    var li = document.createElement("li");
    var text = document.createTextNode(item);
    li.appendChild(text);
    table.appendChild(li);
  });
  form.reset();
};
