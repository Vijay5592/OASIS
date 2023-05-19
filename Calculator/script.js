let input = "";
let result = "";

function addInput(val) {
	input += val;
	document.getElementById("display").value = input;
}

function clearInput() {
	input = "";
	result = "";
	document.getElementById("display").value = "";
}

function calculate() {
	try {
		result = eval(input);
		document.getElementById("display").value = result;
	} catch (error) {
		document.getElementById("display").value = "Error";
	}
}