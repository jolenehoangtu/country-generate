var divList = document.querySelector('#divList');

//color generating:
const hexaGenerator = function () {
	return ('#' + Math.random().toString(16).slice(2, 8));
}



// div with color and country name:
function countryDiv(country) {
	let colorDiv = document.createElement('div');
	colorDiv.setAttribute('class', 'colorDiv') //class for the colorDiv
	divList.appendChild(colorDiv);
	colorDiv.textContent = country.toLowerCase();
	colorDiv.style.backgroundColor = hexaGenerator();

}

// function: start with a letter:

function letterStartWith() {
	divList.innerHTML = '';
	let inputText = document.querySelector('#input-text').value.toLowerCase();
	const resultCountry = countries.filter((searchValue) => {
		let lowerCaseResult = searchValue.toLowerCase();
		let finalResult = lowerCaseResult.startsWith(inputText);
		if (finalResult) {
			countryDiv(lowerCaseResult)
			return lowerCaseResult; ///need the return to finish the function
		}
	});
	console.log(resultCountry);
	document.querySelector('#result').textContent = resultCountry.length;
	//document.querySelector('#input-text').value = "";
};

//function: search with any letter:

function anyletterSearch() {
	divList.innerHTML = '';
	let inputText = document.querySelector('#input-text').value.toLowerCase();
	const resultCountry2 = countries.filter((searchValue) => {
		let lowerCaseResult = searchValue.toLowerCase();
		let finalResult = lowerCaseResult.includes(inputText); //inlude method result true/false
		if (finalResult) {
			countryDiv(lowerCaseResult);
			console.log(lowerCaseResult);
			return lowerCaseResult;
	
		}
		
	});
	document.querySelector('#result').textContent = resultCountry2.length;
	
}
//const defaultSetting = document.querySelector('#input-text');
//defaultSetting.addEventListener('input', letterStartWith);
const startingSetting = document.querySelector('#startingword');
let startingSettinBtn=startingSetting.addEventListener('click',letterStartWith);
const anywordSetting = document.querySelector('#anyword');
anywordSetting.addEventListener('click',anyletterSearch);