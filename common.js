// get Element
var boxElm = document.querySelector(".box_re");
var sizeElm = document.querySelector("#size");
var borderElm = document.querySelector("#border");
var colorElm = document.querySelector("#color");
var backgroundElm = document.querySelector("#background");
var backgroundRadiaElm = document.querySelector("#background-radia");
var inputElms = document.querySelectorAll(".action");
var codeElm = document.querySelector(".box_result p");
var copyElm = document.querySelector(".box_cp");

// Handle
function handleChange() {
  boxElm.style.maxWidth = `100%`;
  boxElm.style.border = `${borderElm.value}px solid ${colorElm.value}`;
  boxElm.style.background = `linear-gradient(${backgroundElm.value}, ${backgroundRadiaElm.value})`;
  if (sizeElm.value <= 300) {
    boxElm.style.width = `${sizeElm.value}px`;
    boxElm.style.height = `${sizeElm.value}px`;
  } else {
    boxElm.style.width = `${boxElm.offsetWidth}px`;
    boxElm.style.height = `${boxElm.offsetHeight}px`;
  }
  var curElm = document.querySelector('input[name="postion"]:checked').value;
  switch (curElm) {
    case "center":
      boxElm.style.margin = `0 auto`;
      break;
    case "right":
      boxElm.style.margin = `0 0 0 auto`;
      break;
    default:
      boxElm.style.margin = `0`;
      break;
  }
  var resultCode = boxElm.getAttribute("style");
  resultCode = resultCode.split(";");
  resultCode = `<p>${resultCode.join(";<br/>")}</p>`;
  codeElm.innerHTML = resultCode;
}

// Action
for (input of inputElms) {
  input.addEventListener("change", handleChange);
}

// copy button
copyElm.onclick = function () {
  navigator.clipboard.writeText(codeElm.innerText);
  alert("COPIED CSS CODE: \n" + codeElm.innerText);
};
