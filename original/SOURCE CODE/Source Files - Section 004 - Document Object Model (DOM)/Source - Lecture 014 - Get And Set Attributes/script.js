// Lecture: Get And Set Attributes

/*
// var div = document.querySelector('div.wrapper');

// console.log(div.getAttribute('class'));
// console.log(div.getAttribute('id'));
// console.log(div.setAttribute('style', 'background-color: coral'));
// console.log(div.removeAttribute('style'));
// console.log(div.hasAttribute('style'));

// var btn = document.getElementById('add-btn');
// var input = document.getElementById('add-input');

// btn.addEventListener('click', function(e) {
//   e.preventDefault();
  
//   input.setAttribute('type', 'submit');
//   input.setAttribute('value', input.value);
// });
*/

var div = document.querySelector('div.wrapper')
console.log(div.getAttribute('class')); //return 'wrapper' class name
console.log(div.getAttribute('id')); //null

//setAttribute('attr', 'value')
//set the value of element, if element exist, it get updated
console.log(div.setAttribute('style', 'background: coral')); //change the background to coral

console.log(div.removeAttribute('style')); //remove the background coral
console.log(div.hasAttribute('style')); //return true or false

var btn = document.getElementById('add-btn')
var input = document.getElementById('add-input')

btn.addEventListener('click', function (e) {
    console.log("btn clicked");
    e.preventDefault() //prevent default event.
    input.setAttribute('type', 'submit');
    input.setAttribute('value', input.value);
})



















