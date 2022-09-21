function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());

const bodyChangeColor = document.querySelector("body");
const buttonChangeColor = document.querySelector("button.change-color");
const spanNameColor = document.querySelector("span.color");

buttonChangeColor.addEventListener('click', onBodyChangeColor)

function onBodyChangeColor(event) {
	event.preventDefault();
	
spanNameColor.textContent = getRandomHexColor();
bodyChangeColor.style.backgroundColor = getRandomHexColor()

}