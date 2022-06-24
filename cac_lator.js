alert("Welcome to CALCULATOR")
var operator = prompt("Enter operator ( either +, -, * or / ):")
var firstnumber = prompt ("enter first number")
var secondnumber = prompt ("enter second number")

if (operator == '+') {
  result = firstnumber + secondnumber;

}
else if (operator == '-') {
  result = firstnumber - secondnumber;
}

else if (operator == '*') {
  result = firstnumber * secondnumber

}

else {
  result = firstnumber / secondnumber
}

// display the result of the Calculator
alert(" Result is " +  result);  
