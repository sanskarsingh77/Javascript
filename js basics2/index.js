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
function Rectangle(){
    this.length =len;
    this.breadth =bre;
    this.draw= function(){
        console.log('drawing');
    }
}
// this refers to the current object

// object creation using constructor function
let rectangleObject = new Rectangle();
// new ek empty object create krta hai js me

 
