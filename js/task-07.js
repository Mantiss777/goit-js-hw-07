const inputFontSize = document.querySelector("input#font-size-control");
const spanFontSize = document.querySelector("span#text");

inputFontSize.addEventListener('input', onFontSizeChange)

function onFontSizeChange (event) {
	// event.preventDefault();
	spanFontSize.style.fontSize = `${inputFontSize.value}px`
	
}

