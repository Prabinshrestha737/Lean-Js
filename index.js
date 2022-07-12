// Ways to print in JavaScript
console.log("Hello world");
//alert("me")
document.write("Hello This is document write");


// JavaScript console API
console.log("Hello world", 2 + 8, "Errors");
console.warn("THis is warning");
console.error("This is an Error");
// console.clear() 


// JS variables

// Variables stores data values 

var num = 34;
var num2 = 56;
console.log(num+num2);


// data types in js

// num 
var num1 = 455;
var num2 = 20;

//string
var str1 = "This is a string";
var str2 = "this is also a string";

//objects
var marks = {
    ravi:20,
    shyam: 89,
    hari: 98
}


console.log(marks);


// Booleans 
var a = true;
var b = false;

/* 
At the very high level, there are two types of data types in JS 
1. Primitive : undefined, null, number, string, boolean, symbol
2. Reference data types : Arrays and objects 

*/

var arr = [1,2,3,4,5]


// Operators 
//Arithmetic Operators 

var a = 100;
var b = 10;

console.log("The value of a + b is", a+b);
console.log("The value of a - b is", a-b);


console.log("The value of a * b is", a*b);
console.log("The value of a / b is", a/b);


// logical Operators AND OR NOT

// console.log(true && true)
// console.log(true && false)


// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// console.log(!true)


// JS Functions 
// DRY = DO not repeat yourself. 

function avg(a, b){
    return (a+b)/2;

}

c = avg(4, 6);
console.log("average", c)


// COnditions in JS 


// if else statement
var age = 4;
if (age > 18){
    console.log('You are not a kid')
}

else {
    console.log('you are a kid')
}



// Loops 

var arr = [1,2,3,4,5,6,7];
console.log(arr);

for(var i =0;i<arr.length;i++){
    if (i==3){
        // break;
        continue;
    }
    console.log(arr[i])
}


// arr.forEach(function(element){
//     console.log(element);
// })


// let j=0;
// const ac = 0;
// acc++



// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
    
// }

// do {
//     console.log(arr[j]);
//     j++
// } while (j<arr.length)



let myArr = ["fan", "prabi", "xyz", true, 34];

// Array methods 
console.log("JS Array method")
console.log(myArr.length);
myArr.pop();
myArr.push('Pushed');
myArr.shift()
console.log(myArr);

//convert into string()
myArr.toString()

// String methods in JS
console.log("JS string method")
let myString = "I am a good"
console.log(myString.length)
console.log(myString.indexOf("good"))
console.log(myString.lastIndexOf("good"))

console.log(myString.slice(1,4))

//Replace first orrcurence in the string
console.log(myString.replace("I am", "We are"))


let myDate = new Date();

// console.log(myDate);

console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getTime());



// DOM manipulation 

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container')
console.log(elemClass)

elemClass[0].style.background = 'yellow';
elemClass[0].classList.add('bg-primary');
elemClass[0].classList.add('text-success');


console.log("Print DIV")
tn = document.getElementsByTagName('div')
console.log(tn)

createdElement = document.createElement('p');
createdElement.innerText = "THis is created using inner element"
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "THis is created bold";

tn[0].replaceChild(createdElement2, createdElement);


console.log('Query Selector')
// Selecting using Query 

sel = document.querySelector('.container')
console.log(sel)

sel = document.querySelectorAll('.container')
console.log(sel)


