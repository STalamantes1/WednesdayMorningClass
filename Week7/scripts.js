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
// let score=Number(prompt("Enter your score (0-100")); 
// //input is a string data type, we must convert it to the number data type 
// if (score >= 90) {
// console.log("A");
// } else if (score >= 80) {
// console.log("B");
// } else if (score >= 70) {
// console.log("C");
// } else {
// console.log("F");
// }

// let text = "Hello World!";
// let result = text.toUpperCase();


// document.body.innerHTML += "<p>The score you have is a " + score + "</p>";
//I want the website to ask the user for their name, and then display "Hello [name]"
// let username=prompt("What is your name? ");
// document.body.innerHTML += "<h1>Hello " + username.toUpperCase() + "</h1>";



//WHY USE LOOPS? 
//Repeat code multiple times, without duplicating code 

//The WHILE LOOP 
// while(condition){
//     //code to run repeatedly, if condition is true 
//     //Infinite loops, make sure something inside changes the condition 
// }

//basic program that is going count from 1-5, and will display it via console
// let count=0; //this is our starting point, intialize loop control variable 
// while(count<=5){ //checks condition, if true eveything in brackets runs 
//    console.log("Count is: "+count);
//    count++; //increment to avoid infinite loop 
// }

// //FOR Loop 
// for(initialization; condition; final-expression){
//     //repeated code
// }

// for(let i=1;i<=5;i++){
//     console.log("i is: "+i);
// }

//let i=1, is our starting point 
// i<=5, means to stop when greater than 5 
//i++, we are counting by 1 
//Why FOR is cleaner: All loop logic is in one line, easier to read imo 

//program that lets the user pick what number to count to

// for(let i=1; i<=num;i++){
//     console.log(i);
// }



//classic triangle loop pattern 
// let triangle="";
// for(let line=1;line<=7;line++){
//     triangle+="*";
//     console.log(triangle)
// }



// let num=Number(prompt("Pick a number you want to count to: "));
// let num2=Number(prompt("Pick a second number, that we will use to count by: "));
// for(let i=0; i<=num; i+=num2){
//     //condition inside loop 
//     if(i%2===0){
//         console.log('current number is even: '+i)
        
//     } 
//     else{
//         console.log("Number is odd: "+i)
//     }

// }


let num3=Number(prompt("What number do you want to count down from: "))

while(num3>0){
    console.log("Count down number: "+num3);
    num3--;
}
