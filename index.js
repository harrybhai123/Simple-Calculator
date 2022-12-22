const values = document.getElementById("values");
let buttons = document.querySelectorAll("button");

let bag = "";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    console.log(e.target);
    var numEnter = e.target.innerHTML;
    if (numEnter == "C") {
      values.value = window.location.reload();
    } else if (numEnter == "=") {
      values.value = eval(bag);
    } else {
      bag += numEnter;
      console.log(numEnter);
      values.value = bag;
    }
  });
}
