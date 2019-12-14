let firstNumber = +prompt("Enter a number");
let operator = prompt("Enter an operator");
let seconfNumber = +prompt("Enter another number");

// OR
// let firstNumber = Number(prompt("Enter first number"));
// let seconfNumber = Number(prompt("Enter second number"));

switch(operator){
	case "+":
	 alert(sum(firstNumber, seconfNumber))
	 break;
	 case "-":
	 alert(subtract(firstNumber, seconfNumber))
	 break;
	 case "*":
	 alert(multiply(firstNumber, seconfNumber))
	 break;
	 case "/":
	 alert(divide(firstNumber, seconfNumber))
	 break;
	 default:
	 alert("That's not an operator");

}

function sum(num1, num2){
	 return num1+num2;
}
function subtract(num1, num2){
	 return num1-num2;
}
function multiply(num1, num2){
	 return num1*num2;
}
function divide(num1, num2){
	 return num1/num2;
}

 // alert(sum(firstNumber, seconfNumber));

// let age= +prompt("enter your age");
// let country = prompt("enter your country").toLowerCase; //so we can right us and US



// if(country=="us" && age>=21 || country!="us" && age>=18){
// 	alert("Have a beer");
// } else alert("Have a soda");