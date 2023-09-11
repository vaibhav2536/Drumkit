var noOfButtons=document.querySelectorAll("button.drum").length;

for(var i=0;i<noOfButtons;i++)
{
    document.querySelectorAll("button.drum")[i].addEventListener("click",handleClick);
}
function handleClick(){
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);  
    buttonAnimation(buttonInnerHTML); 
}
// we have created this fn for button click
// Here this.innerHTML tells us which button is being pressed and stores it in buttonInnerHTML
// here we have used more simple way of defining the fn ie we have not added any parameter to function as we have done below


document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key); 
});
//we have created this fn for Keyboard click
//here function(event) tells us which key is being pressed and we access that key using event.key.
//Here we have applied eventListner to whole document and not on any specific element
// here we have used more complex way of defining the fn ie we have added a parameter "event" to function


// here key takes the value of buttonInnerHTML
function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break; 
        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play(); 
            break;
        case "k":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;        
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

// here currentKey takes the value of buttonInnerHTML.
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed"); 
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
// ------------------------------------------------------------------------------------------------------------
// 5)lets learn about timeout function in javascript:
// syntax:x
// setTimeout(function, milliseconds, param1, param2, ...)

// function: it is Required field.
// The function to execute.

// milliseconds: it is Optional field.
// Number of milliseconds to wait before executing.
// Default value is 0.

// param1,param2,... : it is Optional field.
// Parameters to pass to the function.

// ----------------------------------------------------------------------------------------------------------

// 1)Lets learn about addEventListener
// Syntax:
// element.addEventListener("click",handleClick);

// here we have used a fn called addEventListener,this fn takes two parameters:
// the first parameter is what we want to perform.
// In order to see more things which it can perform refer to the following link given below:
// https://www.w3schools.com/jsref/met_document_addeventlistener.asp 

// the second parameter is fn we want to call
// NOTE:here we have not used parenthesis while calling the fn,coz we dont want our fn to be called directly but we want that our fn should be called when we click on the button.

// we could have written our fn annoymously also:
// document.querySelectorAll("button.drum")[i].addEventListener("click",function(){
//     alert("i got clicked!");
// });

// --------------------------------------------------------------------------------------------------------------------

// 2)lets learn how to add audio using javascript

// function handleClick(){
//     var audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
// }
// on creating tha variable "audio", it creates an <audio> element in our HTML file and this HTML element can perform various tasks, for ex,play
// In order to see more task which the <audio> element can perform,refer to the link given below:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement#instance_properties

// ------------------------------------------------------------------------------------------------------------------

// 3)lets learn about this keyword in javascript

// function handleClick(){
//     (this.style.color="white");
// }

// this keyword helps us to find that on which button or element we are performing the click(it may be some other task also)and then applies the white color to that button.

// If we use this.innerHTML so in this case, this keyword will us to find that on which button or element we are performing the click(it may be some other task also)and then return that button or element to us.

// ----------------------------------------------------------------------------------------------------------------

// now lets learn about KeyboardEventListner:

// document.addEventListener("keypress",function(event){
//     console.log(event);
// });
// this would tell us the key which we will press on key board.

// -----------------------------------------------------------------------------------------------------------

// 4)lets learn how to create objects in javascript and how to create methods of objects

// syntax:
// var objectName={
//     property1:"value for string in double quotes",
//     property2:value for number without double quotes,
//     property3:value of Boolean without double quotes,
//     property4=["value1","value2"] for array of values
//     functionName:function(){
//          write the code for what you want your fn to perform     
//     }
// }

// In order to call our object ie to get the values of corresponding properties of an object, we use:
// objectName.propertyName;

// for ex:
// creating object:
// var houseKeeper1={
//     name:"ravita",
//     age:24,
//     workingYears:2,
//     typeOfKepping:["washing","bathroom","sweeping"]
//     cleanFloor:function(){
//         alert("i am going to clean")
//     }
//    
//
// };

// calling object:
// houseKeeper1.name;
// output:
// 'ravita'

//  houseKeeper1.cleanFloor();


// the above form of defining the objects and its methods is bit tedious when we need to create many objects,so in order to make it fast we can use the constructor function:
// syntax:
// function HouseKeeper(name,age,workingYears,typeOfKeeping){
//     this.name=name;
//     this.age=age;
//     this.workingYears=workingYears;
//     this.typeOfKeeping=typeOfKeeping;
//     this.cleanFloor=function(){
//        alert("i am going to clean"); 
//     }
// }

// NOTE:we keep name of the fn in capital letters and do not follow Camel casing while writing it.

// Now we can initialise the object in following way:
// var houseKeeper1=new HouseKeeper("ravita",24,2,["washing","bathroom","sweeping"]);
// var houseKeeper2=new HouseKeeper("ramu",21,4,["mopping","washing"]);

// calling object:
// houseKeeper1.name;
// output:
// 'ravita'

//  houseKeeper1.cleanFloor();




