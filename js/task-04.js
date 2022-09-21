const counter = document.querySelector("#counter");
const value = document.querySelector("#value");
const incrementButton = counter.lastElementChild;
const decrementButton = counter.firstElementChild;


let counterValue = 0;

setResult(counterValue);

function setResult(number) {
    counterValue = number;
    value.textContent = number;
}

const handleIncrement = () => {
    setResult(counterValue + 1);
};

const handleDecrement = () => {
   //  if (counterValue === 0) {
   //      return;
   //  }
    setResult(counterValue - 1);
};

incrementButton.addEventListener('click', handleIncrement);
decrementButton.addEventListener('click', handleDecrement);


