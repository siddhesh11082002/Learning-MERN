// // define the function
// function userDetails(username, experience){
//     return `
//         USER DETAILS
//         USERNAEM: ${username}
//         EXPERIENCE: ${experience} yrs
//     `
// }

// console.log(userDetails("Amisha", 5));
// console.log(userDetails("Amisha", 8));


// FUNCTION EXPRESSION
// let greeting = function(name){
//     console.log(`Hello ${name}, have a nice day`);
// }
// greeting("Seetal")

// IIFE / SIF

// (function(a,b,c){
//     console.log(`The sum of a, b, c is ${a+b+c}`);
// })(5,8,7);

// ARROW FUNCTION
// let cube = (num) => console.log(`The cube of ${num} is ${num**3}`);
// cube(5);


// Arrow function dont have their own this value
// let learningThis = () => {
//     console.log(this);
// }
// learningThis();


// Method inside object >> refers to that object only.
// let user = {
//     name : 'Arun',
//     showMsg: function(){
//         console.log(`Hello ${this.name}, have a nice day`);
//     }
// }
// user.showMsg();

//  Arrow functions inherit the value of this from enclosing / lexical scope
// function CounterTimer() {
//     this.count=0;
//     setInterval(() => console.log(this.count++), 1000);
// }
// CounterTimer();

// Object constructor

// let emp = new Object();
// emp.empName = "Jay";
// emp.empId = 4785;
// emp.empAddress = "Pune";
// emp.displayDetails = function(){
//     console.log(`${this.empName}`);
// }

// console.log(emp);
// emp.displayDetails();


// Function constructor
// function Student(name, age, course){
//     this.StudentName = name;
//     this.StudentAge = age;
//     this.StudentCourse = course;
//     this.Message = function(){
//         console.log(`Hellow ${this.StudentName}, You have successfully enrollled in ${this.StudentCourse}`);
//     }
// }

// let student1 = new Student("Rohan", 25, "C++");
// console.log(student1);
// student1.Message();

// Student.prototype.Greeting = function(){
//     console.log("have a great day");
// }

// student1.Greeting();

// Inheritance
// function ResponseCl(success, message){
//     this.success = success;
//     this.message = message;
//     this.getSuccess = function(){
//         return this.success;
//     }
//     this.getMessage = function(){
//         return this.message;
//     }
//     this.setSuccess = function(success){
//         this.success=success;
//     }
//     this.setMessage = function(message){
//         this.message=message;
//     }
// }


// const student = new ResponseCl(true,"Student registered successfull.");
// console.log(student.getMessage());
// console.log(student.getSuccess());

// student.setSuccess(false);
// student.setMessage("Something went wrong.");
// console.log(student.success);
// console.log(student.message);

// function Person(name){
//     this.name=name;
// }

// Person.prototype.showMsg=function(){
//     console.log(`Hello ${this.name}`);
// }

// Person.prototype.Greeting = function(){
//     console.log("Have a nice day");
// }

// function Employee(empID){ //derived function
//     this.empID=empID;
// }

// // Inheritance
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.Message = function(){
//     console.log("Congratulation, you got promoted!");
// }

// Employee.prototype.Greeting = function(){
//     console.log("Have a nice day!");
// }

// const emp1 = new Employee(1234567);
// console.log(emp1);
// emp1.Message();
// emp1.Greeting();

