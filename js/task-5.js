const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const changeOutputText = event => {
  if (event.target.value.length > 0) {
    outputRef.textContent = event.target.value;
  } else outputRef.textContent = "незнакомец";
};

inputRef.addEventListener("input", changeOutputText);