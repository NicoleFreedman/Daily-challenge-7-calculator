let displayValue = document.getElementById("display");
let resultShowed = false;
let resultValue = "";
let newOperator = false;

function addOperator(operator) {
	if(newOperator){
		resultValue = displayValue.value;
	}
	if (!(resultValue.value == "")) {
		resultValue += operator;
		resultShowed = true;
	}
}

function display(symbol) {
	if (resultShowed){
		clearAfterResult();
	}
	if (displayValue.value == 0) {
		displayValue.value = symbol;
	} else {
		displayValue.value += symbol;
	}
	resultValue += symbol;

}

function result(){
	displayValue.value = eval(resultValue);
	resultShowed = true;
	resultValue = "";
	newOperator = true;
}

function clearAll() {
	displayValue.value = "0";
	resultValue = "";
}

function deleteOne() {
	displayValue.value = displayValue.value.slice(0, -1);
	resultShowed = false;
	if(displayValue.value.length < 1){
		displayValue.value = "0";
	}
}

function clearAfterResult() {
	displayValue.value = "";
	resultShowed = false;
}