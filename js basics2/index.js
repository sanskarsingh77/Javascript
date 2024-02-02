console.log('jai shree ram')

// OBJECT CREATE
let rectangle = {
    length: 1,
    breadth: 2,
    draw: function() {
        console.log('drawing rectangle')
    }
};
// jai shree ram
// js basics2/:42 Live reload enabled.
// rectangle.length iski help se hum functtion ke andar ke proprrties/value acsess kr ssakte hai

// rectangle.length
// 1
// rectangle.draw
// ƒ () {
//         console.log('drawing rectangle')
//     }
// rectangle.draw()
//  drawing rectangle 
// undefined
// rectangle.length
// 1
// for creating object you can do it with the help of 2 methods one is
// 1->factory function==> isme pehle ek function create hota hai aur phir vo return ho jaata hai in simple language yeh pehle ek f unction banata hai phir usko return kr deta hai 

function createRectangle(){
    let rectangle ={
        length: 1,
        breadth: 2,
        draw: function(){
            console.log('drawiing rectangle');
        }
        // draw ke andar jo likha hai  usko aise bhi likh sakte hai
        //  draw() {
        //     console.log('drawiing rectangle');
        // }
    }
    return rectangle;
}
//  sabko  accsess krne ke liye hame vahi agar length acsses krni hai to rectangel.length , agar breadth accsess krni hai rectangle.breadth ,agar draw ke andar jo likha hai usko accsses krna hai to phir rectangle.draw() krenge 




function createRectangle(len, bre){
    let rectangle ={ 
        length: len,
        breadth: bre,
        draw: function(){
            console.log('drawiing rectangle');
        }
        // draw ke andar jo likha hai  usko aise bhi likh sakte hai
        //  draw() {
        //     console.log('drawiing rectangle');
        // }
    }
    return rectangle;
}
let recatngleObj1= createRectangle(5,4); 
// upar vali line se humne ek rectangleObj1 naam ke variable me upar vale functionko daal diya aur parenthesis me parameters daal diya rectangle ke 

//  ab mujhe agar same obj banaane honnge to  mai ek variable bane ke usko parmaeters de ke ban dunga factoryv functions ke help se like
let reactangle1 = createRectangle(3,4)
let reactangle2 = createRectangle(2,1);

// second method to make objects is
// 2->constructor function -> this uses pascal notation ->first letter of every word is capital -> NumberOfStudents
// constructor function-> properties/methods-> initialize/Define  isme return nhi krna padta
// function Rectangle(){
//     this.length =len;
//     this.breadth =bre;
//     this.draw= function(){
//         console.log('drawing');
//     }
// }
// this refers to the current object
 
// object creation using constructor function
let rectangleObject = new Rectangle(4,6);
// new ek empty object create krta hai js me




// DYNAMIC NATURE OF OBJECTS -->ISME YEH REHTA KE MAI CHAU TO KOI PROPERTY ADD KRU MAI CHAHU TO KOI PROPERTY DELETE THIS IS CALLED DYNAMIC NATUTE OF OBJECTS 
 
// lets add colour in rectangleObject

rectangleObject.color ='yellow';
console.log(rectangleObject);

// lets delete this added colour property
delete rectangleObject.color;
console.log(rectangleObject);

// constructor property--> yeh property hume btati hai ke koi object bana kaise
// jaise hume check krna hai ke rectangleObject kaise bna hai to to hum console me rectangleObject.constructor likh denge aur vo jaha se construct hua  vo ajayega
// functions are objects in js as kisi entity ke agar property ho aur uske methods bhi ho to vo ke obejct hai
// TYPES IN JS
// 1->PRIMITIVE OR VALUED TYPES-->LIKE NUMBERS ,STRING,BOOLEAN,UNDEFINED,NULL,symbol
//2-->REFRENCE TYPE OR OBJECTS --> LIKE FUNCTIONS  OBEJCTS AND ARRAYS

// PRIMITIVE TYPE ME HAMESHA COPY BANTI HAI 
// REFRENCE TYPE ME HAMESHA SAME ADDRESS PE POINT KRTE HAI

//  NOTE-> PRIMITIVE ARE COPIED BY THEIR VALUE AND REFERNCE ARE COPIED BY THIER ADDRESS/REFRENCE

// let a=10;
// function inc(a){
//     a++
// }
// inc(a);
// console.log(a);



// let a = {value:10};

// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value); 

// Iterating through objects
// 1-> for in
// 2=>for of


let rectangle1 ={
    length: 2,
    breadth :3
};

// for in loop 
for( let key in rectangle1){
    // keys are jo hume uske andar property bannate hai like length and breath 
    // keys are reflected through key variable 
    // values are refleected through rectangle[key]
   console.log(key,rectangle1[key]);
}

// for of loop-> yeh sirrf iterables pe lag sakte hai like arrays ,maps
for( let key in rectangle1){
console.log(key,rectangle1[key]);
}
// abhi console me dikkhayega ke object is not iterable to pehle hum is obejct to array banayenge phit yeh iterate hoga
for( let key in Object.keys(rectangle1)){
    console.log(key);
    }
    // abhi console me saari keys ajayengi lekin uski value ko bhi dikhane ke liye hume enteries use krni hogi
    for( let key in Object.entries(rectangle1)){
        console.log(key);
        }
    

//  TO CHECK KE KOI KEY/PROPERTY PRESENT HAI KE NHI THEN WE D0 

 if ('length' in rectangle1){
    console.log('present');
 }
 else{
    console.log('absent');
 }
//  length to hai upar rectangle naam ke object me to present dikha dega 
if ('color' in rectangle1){
    console.log('present');
 }
 else{
    console.log('absent');
 }
//  color to hai nhi upar rectangle naam ke obejct  to absent dikha dega

// OBJECT CLONING--> mtlb same cheez maine bana rakhi mujhe phir se banaane hai 
// object cloning can be doen by three methods
// 1->iterration
// 2->assign
// 3-> spread

// by iterration

let src = {value:10};
let destination={};
for(let key in src){
    destination[key]=src[key];
    }
    console.log(destination);
// upar vale code me humne src ki value destination me clonekra de de stination to phele empty liya use baad iterrate krake uski src ki value destination me daal di

// by asssign
let src1 = {
    a:10,
    b:13,
    c:3
}
let src2 = { value: 25}

let destina = object.assign({},src);
// isme aapne obejct.assign naam ka ek functionn bana liya  aur empty leke aur src ko copy kra diya empty me aur empty ko equual kra diya destina me

// by spread
let src3={
    a:1,
    b:2,
    c:30
};
let destin = {...src};
console.log(destin);
src.a++;
console.log(destin);

// grabage  collecction
//  aise variable ya constant ko find krta hai jo use me nhi hai
// we have no control over G.C when to start /stop
//  runs in background


         