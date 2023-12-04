   // JAVASCRIPT IS A CLIENT SIDDE SCRIPTINRG LANGUAGE
//  WE NEED JS ENGINE TO RUN JS FIREFOX ME SPIDEER MONKEY HOTA HAI AUR CHROME ME V8 HOTAV HAI VS  JSENGINE


// line below is used to print console window
// body ke andar script tag ke andar js likhi jaati hai  lekin script tag ke andar jo js likhi hai usko tmhe saare chize ho jaye uske baad likhna kyoki agar pehle likh doge to vo render hone me time lagayega aur phir user experience kharab hota hai that why tou shhould write your js  code at the end
    console.log('namaste dunia version2')
    // node pe run krne ke  liye ya apni ide me run krne ke liye hame terminal pe pehle pwd likhna hota hai usse thara path pta chal jayega uske baad likhte hai  node uske baad apni js file likhnii hoti hai eg node index.js
    // *******variable********
    // named memory allocation is variable 
    let a='sanskar';
    console.log(a); 
    let name=5;
    console.log(name);
    // let me dobara declare krna possible nhi hai LET LOCAL hota hai
    // lekin var me redeclaration is possible var global hota hai
    // constant me bhi aap value change nhi kr skate 
    // variable naming ke rules
    // cannot used reserved keywords eg if let var etc 
    // cannot start with a number 
     // connot contain space or hiphen(-)
    // use camelcase-> jaise firtName eg- ageOfStudent ,sanskarSingh isme pehle word pura lower case me uske baad ke words ka pehla letter capital aur sab small

    // **********PRIMITIVE TYPES**************
    // STRING->'cool'->sequence of characters
    // numbers-> 1,2,3,4,1.23,12.85
    // boolean ->true /false
    // undefined-> it is like ke let a;
    // console.log(a);-> print karane ko de diya lekin a ki value to de hi nhi to undefined ajayega 
    // NULL-> mtlb iske andar koi value hi nhi paadi

    // *******DYNAMIC TYPING*******
    //  SAME VARIABLE KO DO DATATYPE DE SAKTE HAI
    let naam="bro";
    console.log(naam);
     naam=3;
     console.log(naam);
     naam=true;
     console.log(naam);
    //  ***********REFRENCE TYPE *****************
    // OBJECTS--> mutiple linked variables 
    // eg- let person= {
    // firstname: "yash"
    // age:24
    //};
    // ab obejct ko acsess krne ke 2 method hai dotnotation and bracket notation
    // dot notation chalo jaise ke tmhe age acsess krni hai to tm   person.age se age acseess kroge
    // bracket notation me tm person['age'] tesh krke acsess kroge



    // ********ARRAYS*************
    // DATA STRUCTURE USED TO CONATINS LIST OF  ITEMS  
    // let names =['ben','ten','ren'];
    // inko ham inke index value se acsses kr sakte hai 
    // agar mujhe ben acsses krna hai to mai name[0] likhunga
    // agar mai likh deta hu name[3]='sen'; to 4 value sen add ho jayegi  agar hum name[1]=2; likhte hai to ten ki jagah 2 ajayega array me
    //   Agar mai name[2]=zen; likh diya to ren ki jagah zen ajayega
        // OPERATPORS
    // 1-> AIRTHMETIC ->++ ,- ,/ ,% ,** SE Hum power me likh sakte hai x**y means x to the power y
    // 2-> ASSIGNMENT- x=x+2
    // 3->COMPARISON - >,<,>=,<=,===,!== --->result in true and false->   == ek loose equality hai yeh sirf value dekhta hai agar equal to true de dega ->=== yeh ek strict equality isme value ke sath datatype bhi same hona cahiye tabhi yeh true dega 
    // let num =1;
    // let str ='1';
    // console.log(num===str);
    // iska ans false ayega kyoki datatype dono ka different hai
    // ternary operator=> syntx->conditon? val : val2 ;
    let age =27;
    let status = (age>=18)? 'you can vote' : 'you cannot vote';
    console.log(status);
    // 4->BITWISE- bitwise and (&), bitwise or(|)
    // 5->LOGICAL-> and(&&) ->(cond1 && cond2 && cond3) agar sari condition ttrue hongi tabhi yeh true ouutput dega
    //  or  (||) -> if any condittion is true then it will show true
    //  not (!) -> true ko false bna deta hai false ko true
    // with non bollean like (false || sanskar) to yeh sanskar output de dega kyoki false falsey value hai aur sanksar truthy value hai lekin(false||1||2) ab 1 aur 2 dono truthy value hai lekin yeh output 1 hi degi kyoki ek truthy value milne ke baad aage check hi nhi krega
    // falsey value hoti hai undefined , nll, 0,false,''empty,NaN not a number
      
    // opertaor precedency
    // let c= a+b*d/c  -> abhi thoda complex hai aur abhi hame precedncy yaad ho gi to hi solve hoga leki agar isko hum let c=(a+((b*d)/d)) abhi tumhe pat hai konsa pehle solve krna hai konsa uske baad     

    // CONTROL STATEMENTS
    // 1=>IF ELSE--> IF(CONDN){
    //     CODE
    // }
    // elseif{
    //     code
    // }
    // else{
    //     code
    // }
    // let marks = 98;
    // if(marks >= 90){
    //     console.log('A');
    // }
    // else if(marks>=70){
    //     console.log('B');

    // }
    // else{
    //     console.log('C');
    // }
    // switch case 
    // Syntax
    let num=2;  
    switch(num){
        case 1: console.log('A');
        break
        case 2: console.log('B');
        break
        case 3: console.log('C');
        break
        default: console.log('D');
    }


    // ******loops*******
    // 1=> for loop
    // syntax for(initialisation, condition,increment/decrment/updation)
    for(i=0;i<5;i=i+1){
        console.log(i);
    }
    for(i=0;i<5;i=i+1){
        console.log("rock"+i);
    }
    for(i=0;i<5;i++){
        console.log(i);
    }
    //2=> while loop
    // let i=1; --> initialsisation
    // while(i<10){  --> bracket ke andar condition
    //     console.log(i);
    //     i++ -->updation
    // }

    //  ************do while loop***********
    // syntax:
    // do{
    //     code
    //     i++
    // }while(i<10);
    //  it will execute atleast one time  
    let y=1;
    do{
        console.log(y);
        y++
    }while(y<=10)
