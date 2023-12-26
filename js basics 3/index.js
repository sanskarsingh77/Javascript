// inbuilt ,objects and arrays //
// 1->math --> you can  check math ke saare property attributes from mdn 



//2-string->primitive 

// string kaise banayenge
let lastName ='boss';

// string ko object bannane ke liye yeh krnege string constructor ka use krenge 
let firstName = new String('bossman');
// console me typeoflastsname krenge to string ayega aur agar typeoffirstname krenge to obejct ayega kyo hummne first name ko obejct banaya hai

// let lastName ='boss'; is prmeitive string ko obejct banane ke liye dot(.) use krte hi js usko  object ki tarah read krne lagega  
// string ki kuch properties  
// lastName.toUpperCase
// lastName.tolowercase
// lastName.length
// lastName.lastName[0]
// lastName.includes() aur bhi bhut saari hai mdn pe check kr sakte hai

let message = 'this is my first message';
let words = message.split('');
console.log(words);

// message.replace('first' , 'second'); replace krne ke liye yeh use krte hai
// 'this is my second message'
let messages = `hi everyone
my name is sanskar singh
i am a 2nd year engineering 
student ${lastName}`;
// `` yeh back tick ke andar aap jaise kijhenge apke console window me bhi bilkul vaisa hi dikhega  yeh `` ko tempalate literals bhi bolte hai
//  yeh ${lastname } ek place holder hai yeh isme lastname jo value hogi vo a jayegi iss para me  


console.log(messages);


//  DATE AND TIME
//  date and time set krne ke 5 taike hai js me   
let date1 = new Date();
console.log(date1);
let date2 = new Date('june 20 1998 07:15');
console.log(date2);

let date3 = new Date('1998, 11 , 20 , 7');
// (year,month,date,hour) aur haa month ki indexing 0 se hue hai to 11 ka mtlb december hota hai
console.log(date3);
  
date3.setFullYear(1947);


// date and time me getter setter bhi rehte hai agar kuch  fetch krne ho to getter agar set krna date ya time to setter


//ARRAYS: collections of items aur ha js me alag alag trah ke elements ka collection bhi arrays hota h

// array creation
// let numbers = [1,4,2,8];
// comsole.log(numbers);
//  WE CAN ACSSES ARRYA ELEMENT USNG INDEX 

// INSERTIONN
//  AT END
// numbers.push(9);
// at begining
// numbers.unshift(8);
// AT middle 
// numbers.splice(2,0,'a','b','c');
// 2 mtlb kis index pe daalna hai aur 0 mtlb koi bhi number delete nhi krna chata hu aur 'a','b','c' iska mtlb yeh insert krna hai 

// SEARCHING
// console.log(numbers);
//  console.log(numbers.indexOf(2));
//  isse 2 kis index pe hai yeh bata dega
// ab agar tum koi aisi cheez search kr rhe jo array me hai hi nhi to  -1 dega console me 


// WE WANT TO CHECK IF AN NUMBER EXIST IN ARRAY
// console.log(numbers.includes(2));
// WE CAN use include like numbers.include(2);
// agar 2 hoga array me to cosole me true ajayega
// number.indexOf(4,2)
// uspar vali line ka mtlb 4 check kro array me hai ke nhi lekin search jo hoga vo index 2 ke baad se start hoga
// console.log(numbers.indexOf(4,2));

// array ko object ki tarh banake find kra hai koi element aaray ka to yeh krenge
// let courses ={
//     {no:1, naam:'sanskar'},
//     {no:2, naam:'singh'}
// };

//  let course = courses.find(function(course){
//     return course.naam == 'sanskar';
//  })
//  console.log(course);

//  let course = courses.find(function(course){
//     return course.naam == 'sanskar';
//  })
//  uppar vale  code ko aur chota kr sakte hai
// let course = courses.find(course => course.naam === 'sanskar';
//  );
//  console.log(course);
//  step 1-> function jo upar likha tha usko hata ke ek arrow(=>)laga do
// stp2-> agar single parameter hai course pe laga bracket hata de 
// step3-> return ke liye single line ofcode hai to return hata de vo jis bracket me hai vo hata de



// ELEMENT REMOVING
// let numbers = { 1,22,8,9,8};

// //   END
// numbers.pop();
// // beggining
// numbers.shift();
// // middle
// numbers.splice(2,1);
// // splice me aisa hai ke 2 index ka element remove ho jayega aur 1 hi element remove krnehai to 1 likha hai

// console.log(numbers);

// EMPTY ELEMENTS IN ARRAY
let numbers =[1,5,8,9];
 numbers.length =0 ;
 numbers.splice(0,numbers.length);

//  yeh uppar vale dono tareeko se tm kr sakte ho array ko empty


// combining & slicing an array
// combining
let first =[1,8,9,87,6];
let second = [3,8,6];

let combined = first.concat(second);
console.log(combined);
// slicing is kuch part ko nikalna array me se

let marks =[10,20,30,40,50,60];
let sliced = marks.slice(2,6);
console.log(sliced);

// slice ke andar 2,6 ka mtlb hai 2 index se slicing starthogi lekin 5 index ke ek pehle tak slice hoga 


// spread operator

