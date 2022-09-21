const inputRef = document.querySelector("input#name-input");
const currentValue = document.querySelector("span#name-output");

inputRef.addEventListener('input', onInputChange)


const onInputChange = (event) => {
	
	currentValue.textContent = event.target.value
	if (event.target.value === '') {
		return currentValue.textContent = "Anonymous";
	}
}

