//Basic Functions

//1.Create a function named hello that prints "Hello Everyone".
function hello() {
    console.log("Hello Everyone");
}
hello();

//2.Create a function named welcome that prints "Welcome to JavaScript" and call it.
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();

//3.Create a function named navi that prints your name.
function navi() {
    console.log("My name is Kabilan");
}
navi();

//4.Create a function named message that prints three different messages.
function message() {
    console.log("Message 1: Keep learning!");
    console.log("Message 2: Practice makes perfect.");
    console.log("Message 3: Never give up!");
}
message();

//5.Create a function named numbers that prints numbers from 1 to 5 using a for loop.
function numbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
numbers();

//6.Create a function named check that contains an if condition and prints a message when the condition is true.
function check() {
    let number = 10;
    if (number > 5) {
        console.log("The number is greater than 5");
    }
}
check();

//7.Create a function named details that prints your name, qualification, and role.
function details() {
    console.log("Name: Kabilan");
    console.log("Qualification: B.E Computer Science");
    console.log("Role: Frontend Developer");
}
details();

//8.Create a function named company that prints your company name.
function company() {
    console.log("Company: Stackly");
}   
company();

//9.Create a function named welcomeUser and call it three times.
function welcomeUser() {
    console.log("Welcome User!");
}
welcomeUser();
welcomeUser();
welcomeUser();

//10.Create two different functions and call both functions.
function greet() {
    console.log("Good Morning!");
}
function farewell() {
    console.log("Goodbye!");
}
greet();
farewell();

//Parameters & Arguments

//11.Create a function with one parameter and print the parameter value.
function printParameter(param) {
    console.log("Parameter value: " + param);
}
printParameter("Hello Parameter!");

//12.Create a function with two parameters and print both values.
function printTwoParameters(param1, param2) {
    console.log("Parameter 1: " + param1);
    console.log("Parameter 2: " + param2);
}   
printTwoParameters("First Value", "Second Value");

//13.Create a function add(a,b) that prints the addition of two numbers.
function add(a, b) {
    console.log("Addition: " + (a + b));
}
add(5, 10);

//14.Create a function sub(a,b) that prints the subtraction of two numbers.
function sub(a, b) {
    console.log("Subtraction: " + (a - b));
}
sub(10, 5);

//15.Create a function multiply(a,b) that prints the multiplication of two numbers.
function multiply(a, b) {   
console.log("Multiplication: " + (a * b));
}
multiply(5, 10);

//16.Create a function divide(a,b) that prints the division of two numbers.
function divide(a, b) {
      if (b !== 0) {
        console.log("Division: " + (a / b));
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
}
divide(10, 2);
divide(10, 0);

//17.Create a function student(name, age) and print the student's details.
function student(name, age) {
    console.log("Student Name: " + name);
    console.log("Student Age: " + age);
}
student("Kabilan", 21);

//18.Create a function employee(name, role, salary) and print all three values.
function employee(name, role, salary) {
    console.log("Employee Name: " + name);
    console.log("Employee Role: " + role);
    console.log("Employee Salary: $" + salary);
}
employee("Kabilan", "Frontend Developer", 50000);

//19.Create a function with four parameters and pass four arguments while calling it.
function fourParams(param1, param2, param3, param4) {
    console.log("Parameter 1: " + param1);
    console.log("Parameter 2: " + param2);
    console.log("Parameter 3: " + param3);
    console.log("Parameter 4: " + param4);
}
fourParams("Value 1", "Value 2", "Value 3", "Value 4");

//20.Create a function with six parameters and pass six different values.
function sixParams(param1, param2, param3, param4, param5, param6) {
    console.log("Parameter 1: " + param1);
    console.log("Parameter 2: " + param2);
    console.log("Parameter 3: " + param3);
    console.log("Parameter 4: " + param4);
    console.log("Parameter 5: " + param5);
    console.log("Parameter 6: " + param6);
}
sixParams("Value 1", "Value 2", "Value 3", "Value 4", "Value 5", "Value 6");

//Default Parameters

//21.Create a function student(name, department, cgpa) with a default value for department.
function studentDetails(name, department = "Computer Science", cgpa) {
    console.log("Student Name: " + name);
    console.log("Department: " + department);
    console.log("CGPA: " + cgpa);
}
studentDetails("Kabilan", undefined, 8.5);

//22.Create a function user(name, age = 18) and call it without passing the age.
function user(name, age = 18) {
    console.log("User Name: " + name);
    console.log("User Age: " + age);
}
user("Ram");

//23.Create a function employee(name, role = "Developer") and call it with only the name.
function employeeDetails(name, role = "Developer") {
    console.log("Employee Name: " + name);
    console.log("Employee Role: " + role);
}
employeeDetails("Kabilan");

//24.Create a function form(name, department, cgpa, disability = "no") similar to the function in your notes. Call it twice with different arguments.
function form(name, department, cgpa, disability = "no") {
    console.log("Name: " + name);
    console.log("Department: " + department);
    console.log("CGPA: " + cgpa);
    console.log("Disability: " + disability);
}
form("Kabilan", "Computer Science", 8.5);
form("Priya", "Mathematics", 9.0, "yes");

//25.Create a function with two normal parameters and one default parameter.
function twoNormalOneDefault(param1, param2, param3 = "Default Value") {
    console.log("Parameter 1: " + param1);
    console.log("Parameter 2: " + param2);
    console.log("Parameter 3: " + param3);
}
twoNormalOneDefault("Value 1", "Value 2");
twoNormalOneDefault("Value 1", "Value 2", "Custom Value");

//Return

//26.Create a function that accepts two numbers and returns their addition.
function addNumbers(num1, num2) {
    return num1 + num2;
}
let sum = addNumbers(5, 10);
console.log("Sum: " + sum);

//27.Create a function that accepts two numbers and returns their subtraction.
function subtractNumbers(num1, num2) {
    return num1 - num2;
}
let difference = subtractNumbers(10, 5);
console.log("Difference: " + difference);

//28.Create a function that accepts two numbers and returns their multiplication.
function multiplyNumbers(num1, num2) {
    return num1 * num2;
}
let product = multiplyNumbers(5, 10);
console.log("Product: " + product);

//29.Create a function that accepts two numbers and returns their division.
function divideNumbers(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    } else {
        return "Error: Division by zero is not allowed.";
    }   
}
let quotient = divideNumbers(10, 2);
console.log("Quotient: " + quotient);
let errorQuotient = divideNumbers(10, 0);
console.log(errorQuotient);

//30.Create a function salary() that returns 40000. Store the returned value in a variable and print it.
function salary() {
    return 40000;
}
let employeeSalary = salary();
console.log("Employee Salary: $" + employeeSalary);

//31.Create a function that accepts an employee's salary and returns the salary.
function getSalary(salary) {
    return salary;
}
let empSalary = getSalary(50000);
console.log("Employee Salary: $" + empSalary);

//32.Create a function that returns a person's name. Store the returned value in a variable and print it.
function getName() {
    return "Kabilan";
}
let personName = getName();
console.log("Person's Name: " + personName);

//33.Create a function that returns "Pass" if marks are 35 or above and "Fail" otherwise.
function checkMarks(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}
let result1 = checkMarks(40);
console.log("Result: " + result1);
let result2 = checkMarks(30);
console.log("Result: " + result2);

//34.Create a function that accepts price and discount and returns the discount value.
function calculateDiscount(price, discount) {
    return (price * discount) / 100;
}
let discountValue = calculateDiscount(1000, 10);
console.log("Discount Value: $" + discountValue);

//35.Create a function that returns the result of an arithmetic operation and use that returned value in another function.
function arithmeticOperation(num1, num2, operation) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            if (num2 !== 0) {
                return num1 / num2;     
        } else {
                return "Error: Division by zero is not allowed.";
            }
        default:
            return "Invalid operation";
    }   
}
function displayResult(num1, num2, operation) {
    let result = arithmeticOperation(num1, num2, operation);
    console.log("Result: " + result);
}
displayResult(10, 5, "add");
displayResult(10, 5, "subtract");
displayResult(10, 5, "multiply");
displayResult(10, 5, "divide");
displayResult(10, 0, "divide");

//Outer Scope

//36.Create a variable outside a function and access it inside the function.
let outerVariable = "I am an outer variable";
function accessOuterVariable() {
    console.log(outerVariable);
}   
accessOuterVariable();

//37.Create an object outside a function containing name and designation. Create a function that prints those values.
let employeeDetailsObj = {
    name: "Kabilan",
    designation: "Frontend Developer"
}
function printEmployeeDetails() {
    console.log("Employee Name: " + employeeDetailsObj.name);
    console.log("Employee Designation: " + employeeDetailsObj.designation);
}
printEmployeeDetails();

//38.Create a variable salary outside a function. Create a function that adds a bonus to that salary and prints the result.
let salaryAmount = 40000;
function addBonus(bonus) {
    let totalSalary = salaryAmount + bonus;
    console.log("Total Salary after Bonus: $" + totalSalary);
}
addBonus(5000);

//39.Create an object containing employee details outside a function. Access its properties inside a function.
let employeeInfo = {
    name: "Kabilan",
    role: "Frontend Developer",
    salary: 50000
}
function printEmployeeInfo() {
    console.log("Employee Name: " + employeeInfo.name);
    console.log("Employee Role: " + employeeInfo.role);
    console.log("Employee Salary: $" + employeeInfo.salary);
}
printEmployeeInfo();

//40.Create two functions that access the same variable created outside both functions.
let sharedVariable = "I am a shared variable";
function firstFunction() {
    console.log("First Function: " + sharedVariable);
}
function secondFunction() {
    console.log("Second Function: " + sharedVariable);
}   
firstFunction();
secondFunction();

//Named, Anonymous & Arrow Functions

//41.Create a named function that accepts a parameter and prints it.
function namedFunction(param) {
    console.log("Named Function Parameter: " + param);
}
namedFunction("Hello from Named Function!");

//42.Create an anonymous function stored inside a variable and call it.
let anonymousFunction = function(param) {
    console.log("Anonymous Function Parameter: " + param);
}
anonymousFunction("Hello from Anonymous Function!");

//43.Create an arrow function that accepts one parameter and prints it. 
let arrowFunction = (param) => {
    console.log("Arrow Function Parameter: " + param);
}
arrowFunction("Hello from Arrow Function!");

//44.Create an arrow function with two parameters that adds two numbers.
let addArrowFunction = (num1, num2) => {
    return num1 + num2;
}   
let arrowSum = addArrowFunction(5, 10);
console.log("Arrow Function Sum: " + arrowSum);

//45.Create a named function, anonymous function, and arrow function that all perform the same addition operation.
function namedAdd(num1, num2) {
    return num1 + num2;
}
let anonymousAdd = function(num1, num2) {
    return num1 + num2;
}
let arrowAdd = (num1, num2) => {
    return num1 + num2;
}
let namedResult = namedAdd(5, 10);
let anonymousResult = anonymousAdd(5, 10);
let arrowResult = arrowAdd(5, 10);
console.log("Named Function Result: " + namedResult);
console.log("Anonymous Function Result: " + anonymousResult);
console.log("Arrow Function Result: " + arrowResult);

//IIFE

//46.Create an IIFE that immediately prints "Hello JavaScript" when the program runs.
(function() {
    console.log("Hello JavaScript");
})();

//47.Create an IIFE that accepts a name parameter and prints "Hello" followed by the name.
(function(name) {
    console.log("Hello " + name);
})("Kabilan");

//48.Create an IIFE that accepts product and discount parameters and displays a special-offer message, similar to the example in your notes.
(function(product, discount) {
    console.log("Special Offer: Get " + discount + "% off on " + product + "!");
})("Laptop", 20);

//Callback & Higher-Order Functions

//49.Create an add function that accepts a callback and two numbers. Add the numbers and then call the callback function with two numbers.
function addWithCallback(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

addWithCallback(5, 10, function(result) {
    console.log("Addition Result: " + result);
});

//50.Create a sub function and pass it as a callback to the add function. The add function should first print the addition result and then execute the subtraction callback, following the structure from your notes.
function subWithCallback(num1, num2, callback) {
    let difference = num1 - num2;
    callback(difference);
}

addWithCallback(10, 5, function(addResult) {
    console.log("Addition Result: " + addResult);
    subWithCallback(10, 5, function(subResult) {
        console.log("Subtraction Result: " + subResult);
    });
});
