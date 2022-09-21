const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener('blur', onInputChange)

function onInputChange (event) {
	event.preventDefault();

		if (event.target.value.length !== 6) {
		return inputRef.classList.add("invalid");
	}
	inputRef.classList.remove("invalid");
	inputRef.classList.add("valid");
}
