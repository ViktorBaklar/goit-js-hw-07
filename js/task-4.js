const btnDecrementRef = document.querySelector('[data-action="decrement"]');
const btnIncrementtRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector("#value");

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  counterValueRef.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
};

btnDecrementRef.addEventListener("click", decrement);
btnIncrementtRef.addEventListener("click", increment);