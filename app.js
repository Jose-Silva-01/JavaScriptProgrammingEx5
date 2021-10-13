/*
    JavaScript Programming Exercise 5
    Control Flow and Loops
    Jose Silva
*/

let a = 10;
let b = 15; 
let c = 5;
let x = 5;
let y = 5;
let z = 6;

console.log(x);
console.log(y);

if(x == y){
    console.log(`x is equal to y`);
}else{
    console.log(`x is not equal to y`);
}

console.log(a);
if(a>15){
    console.log(`a is greater than or equal to 15`);
}else{
    console.log(`a is less than 15`);
}

//Short circuits
if(x == y || a > b){
    console.log(`true`);
}else{
    console.log(`false`);
}

if(x == y && a > b){
    console.log(`true`);
}else{
    console.log(`false`);
}

//Switch Statement
let dayOfWeek;
let today = new Date().getDay();

switch(today){
    case 0:
        dayOfWeek = 'Sunday';
        break;
    case 1:
        dayOfWeek = `Monday`;
        break;
    case 2:
        dayOfWeek = `Tuesday`;
        break;
    case 3:
        dayOfWeek = `Wednesday`;
        break;
    case 4:
        dayOfWeek = `Thursday`;
        break;
    case 5:
        dayOfWeek = `Friday`;
        break;
    case 6:
        dayOfWeek = `Saturday`;
        break;                
}
console.log(dayOfWeek);
console.log(`~~~~~~~~~~~~~`);

//For Loop
for(let i= 0; i < 10; i++){
    console.log(i);
}

//While Loop
console.log(`~~~~~~~~~~~~~`);
let j = 5;
while(j<10){
    console.log(j);
    j++;
}