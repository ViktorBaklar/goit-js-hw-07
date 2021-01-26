const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls > input");
const btnRenderRef = document.querySelector('[data-action="render"]');
const btnDestroyRef = document.querySelector('[data-action="destroy"]');

const createBoxes = value => {
  const defaultSize = 30;
  destroyBoxes();
  for (let i = 0; i < value; i++) {
    const boxRef = document.createElement("div");
    const newSize = defaultSize + i * 10;
    boxRef.style.background = `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;

    boxRef.style.width = `${newSize}px`;
    boxRef.style.height = `${newSize}px`;
   
    boxesRef.appendChild(boxRef);
  }
};

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
};

const clearInput = () => {
  inputRef.value = '';
}

btnRenderRef.addEventListener("click", (event) => {
  createBoxes(inputRef.value);
});

btnDestroyRef.addEventListener("click", destroyBoxes);
btnDestroyRef.addEventListener("click", clearInput);