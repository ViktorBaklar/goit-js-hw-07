const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");


textRef.style.fontSize = "64" + "px";

const changeSize = event => {
  textRef.style.fontSize = `${event.target.value}px`;
}

inputRef.addEventListener("input", changeSize);