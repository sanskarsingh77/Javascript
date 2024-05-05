// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//global scope ke polllution se bachne ke  liye hum iife ka use krte hai
// iife se jo function call krte hai usko pta nhi hot kab end krna hai to vo ; colon laga ke usko batan apadt ahia ke func call end ho gya haif
// function ko ek bracket me daaldete  hai iife me aur uske baad bracket lagake usko call kr lete hai 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')