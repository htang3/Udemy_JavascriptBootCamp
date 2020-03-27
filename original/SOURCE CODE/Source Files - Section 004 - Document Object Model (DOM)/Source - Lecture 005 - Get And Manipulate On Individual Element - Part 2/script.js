// Lecture: Get And Manipulate On Individual Elements - Part 2


//********* */ querySelector return the FIRST element that 
//match a specified CSS selector in the document follow CSS syntax

var el = document.querySelector('ul');
console.log(el); // return ul with detailed content
// el.textContent = "Hello world" => set ul Hello world

var el1 = document.querySelector("#search-note") //search-note id
console.log(el1); // return the first form search-note



var el2 = document.querySelector("ul li") //access ul then li
console.log(el2); // return the first li in ul

var el3 = document.querySelector("ul li:nth-child(2)") //access ul then 2nd element
console.log(el3); //return the 2nd list of ul

console.log(el3.querySelector('p .fa-times')); //get the second Icon

var ele = document.querySelector("li")
console.log(ele); // return the first li element.

var wrap = document.querySelector('body .wrapper')
console.log(wrap);

var noteEl = document.querySelector('div .note-list') //search by class name
console.log(noteEl);

//document.querySelector('tagname: p, ul, li .....')
//document.querySelector("#+id")
//document.queryselector('tagname .classname')
//  all return the FIRST element