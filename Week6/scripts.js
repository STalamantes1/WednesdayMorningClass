//comparison operators 
//=== equal to
// !== not equal 

// console.log(1===1);
// console.log(1!==1);

// let score=85;
// if (score>89){
//     console.log("You got an A");
// }
// else if(score>79){
//     console.log("You have a B ");
// }

// else if(score>69){
//     console.log("You got a C")
// }

// else{
//     console.log("You have a mediorce grade");
// }



// let age=18;
// let isMemeber=false;
// if (age>=18){
//     if(isMemeber){
//         console.log("Adult memeber benefits applied");
//     }
//     else{
//         console.log("Adult, but no memebership")
//     }
// }else{
//     console.log("Minor")
// }





// We use Prompt() to make our websites more interactive 
// let score=85; 
//this variable is hardcoded, user cant change this 
let score=Number(prompt("Enter your score (0-100")); 
//input is a string data type, we must convert it to the number data type 
if (score >= 90) {
console.log("A");
} else if (score >= 80) {
console.log("B");
} else if (score >= 70) {
console.log("C");
} else {
console.log("F");
}

let text = "Hello World!";
let result = text.toUpperCase();


// document.body.innerHTML += "<p>The score you have is a " + score + "</p>";
//I want the website to ask the user for their name, and then display "Hello [name]"
let username=prompt("What is your name? ");
document.body.innerHTML += "<h1>Hello " + username.toUpperCase() + "</h1>";




!==