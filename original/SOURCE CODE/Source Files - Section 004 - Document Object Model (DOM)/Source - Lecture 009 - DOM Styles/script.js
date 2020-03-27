// Lecture: DOM Styles

/*
// var h2 = document.querySelector('header h2');
// console.log(h2);

// console.log(h2.style.color = 'red');
// // console.log(h2.style.background-color = 'green');
// console.log(h2.style.backgroundColor = 'green');

var lis = document.querySelectorAll('ul li');
// console.log(lis[1].style.backgroundColor = 'red');
for(var i = 0; i < lis.length; i++) {
    console.log(lis[i].style.backgroundColor = 'blue');
}

console.log(lis[0].style.cssText = 'background-color: yellow; font-size: 25px;');
*/


var h2 = document.querySelector("header h2")
console.log(h2); // <h2 ...> Note Manager</h2>

console.log(h2.style.color = 'red'); //make the text red
console.log(h2.style.backgroundColor = 'green'); //make h2 background green
console.log(h2.style.backgroundColor); // green

var lis = document.querySelectorAll('ul li'); //return Nodelist of li
console.log(lis); // NodeList 
console.log(lis[0]); //get access like array
console.log(lis[0].style.color = "red"); //set first element red

for (var i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = "blue" //make the bground of all element into blue
}

lis[2].style.cssText = "background-color: yellow"


