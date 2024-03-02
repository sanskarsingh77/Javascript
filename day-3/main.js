// Console Logging and Commenting
// console.log('Hello, World!')

// Commented out code for demonstration

/* 
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
*/

// For Loop
for(let i=0; i<=10; i++){
    console.log(i);
}

// For...In Loop
let obj = {
    name:"John",
    age:30,
    city:"New York"
}
// object has key value pair

for(let xyz in obj){
    console.log(xyz);
}
// for in loop always prints key 

// For...Of Loop
let greet = "Good Morning";

for(let value of greet){
    console.log(value);
}
// in above code it will print good morning in new lines like g in new line o in new lines like this 
// While Loop
let i = 0;
while(i<=10){
    console.log(i);
    i++;
}