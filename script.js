// function add(num1, num2) {
// 	return num1+num2;
// }

// let firstNumber = +prompt("Enter a number");
// let seconfNumber = +prompt("Enter another number");

// OR
// let firstNumber = Number(prompt("Enter first number"));
// let seconfNumber = Number(prompt("Enter second number"));

// function sum(num1, num2){
// 	 return num1+num2;
// }
//  alert(sum(firstNumber, seconfNumber));

let age= +prompt("enter your age");
let country = prompt("enter your country").toLowerCase; //so we can right us and US



if(country=="us" && age>=21 || country!="us" && age>=18){
	alert("Have a beer");
} else alert("Have a soda");