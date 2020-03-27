// Lecture: Get And Manipulate On Multiple Elements - Part 2


var icons = document.getElementsByClassName('fa'); //return HTMLCollection
console.log(icons);
//use Array.from(icons) to transform HTMLCollection to Array
Array.from(icons).forEach(function (icon, index, arr) {
    console.log(icon, index, arr); //return array
});

var lis = document.getElementsByTagName('li');

console.log(lis); //return HTMLCollection

console.log(document.getElementsByTagName('ul'));



//getElementsByTagName return all elements of specified tag only
//it does NOT return the children of it.
//
console.log(document.getElementsByTagName('ul'));






