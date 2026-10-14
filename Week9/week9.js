//What is a function?
//reusable block of code designed to perform a specific task 

// function greetUser(name){
//    console.log("Hello There");
// }

// greetUser(); //calls (executes) the function 

//Function Structure 
// Keyword, function: tells JS we're defining a function 
// Name, identify the function 
//Parameters, Variables inside the parentheses that receive data 
//Body, The code between {} 

//Parameter and Arguments 
//Parameter: Placeholders when defining a function
//Arguments: actual value when calling it 

// function greet(name){ //name is a parameter 
//     console.log("Hello"+ name);
// }

// greet("Sebastian"); //"Sebastian is the argument"


//Function that will add two numbers together
//then console the total 


// function  addNumbers(a,b){
//     return (a+b);
// }

// let total=addNumbers(4,6);
// console.log("The total is:" + total)

//Return sends a value back to where the function was called 
//console.log() just prints it 

//Return is like your function handing you back a notes with the answer written on it 
//console.log is your function yelling the answer out loud, we hear it but we cant use it again

// function mulitply(x,y){
//     return x*y
// }

// let result=mulitply(15,15);
// console.log(result); //225

//Create me a function that will count to 5 by 1s 
// function countToN(n){
//     for (let i=1; i<=n; i++){
//         console.log(i);
//     }
// }
// countToN(5);



//Nested Functions 
// //FUnction can call another function inside of it 
// function square(num){
//     return num*num;
// }

// function printSquare(num){
//     console.log("Square is: "+ square(num));
// }

// printSquare(6); //36

//greets the user, asks for their name, then prints it 
function username(){
    let name=prompt("What's your name? ");
    console.log("Welcome, " + name);
}

username();