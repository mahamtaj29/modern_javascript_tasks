// adding a prompt for user input in the terminal
const prompt=require("prompt-sync")({sigint:true}); 
// start of the magic calculator code
console.log("-------Welcome to magic calculator-------");
console.log("Please select desired operator (+), (-), (x), (/), (magic) or (exit)");
let condition = true;
while(condition)
{
    // Taking operator input
    const selectOperator = prompt("-------Write Operator Here-------: ")
    if (selectOperator === "exit") {
        console.log("Exiting.... Goodbye! ");
        condition = false
        break; 
    }
    let num1, num2, result;
    // Taking 2 inputs when arithmatic operators are selected
    if (selectOperator != "magic")
    {
        num1 = Number(prompt("Enter first number here: "));
        num2 = Number(prompt("Enter second number here: "));
            if (num2 === 0 && selectOperator === "/")
                {
                    console.log("Cannot divide by zero. Try another operation ");
                    continue;
                }
    } else {
        // Taking only one input in case of magic calculator operator
        num1 = Number(prompt("If you want to see magic, enter a number (1-100): "));
    }
    switch(selectOperator)
    { 
        case "magic":
            result = magicOperation(num1)
            console.log(result);
            break;
        case "+":
            result = add(num1, num2)
            console.log(num1 + " + " + num2 + " = " + result);
            break;
        case "-":
            result = subtract(num1, num2)
            console.log(num1 + " - " + num2 + " = " + result);
            break;
        case "x":
            result = multiplication(num1, num2)
            console.log(num1 + " x " + num2 + " = " + result);
            break;
        case "/":
            result = division(num1, num2)
            console.log(num1 + " / " + num2 + " = " + result);
            break;
        default:
            console.log("Invalid operation. Please try again later! ");
    }
}  
// Function to perform add arithmetic operation     
function add(num1, num2){
    return num1 + num2;
}
// Function to perform subtract arithmetic operation
function subtract(num1, num2){
    return num1 - num2;
}
// Function to perform multiplication arithmetic operation
function multiplication(num1, num2){
    return num1 * num2;
}
// Function to perform division arithmetic operation
function division(num1, num2){
    return num1 / num2;
}
// Function to perform magic operation
function magicOperation(num1){
        switch(true){
            case num1 < 1:
                return "The number is too small for magic and remains unchanged: " + (num1);
            case num1 < 10:
                return "Magic dust makes the number grow: " + (num1 * 10);
            case num1 >= 10 && num1 <= 100:
                return "A magic gnome doubles the number: " + (num1 * 2);
            default:
                return "The number is too mighty for magic and remains unchanged: " + (num1);
        }
}
