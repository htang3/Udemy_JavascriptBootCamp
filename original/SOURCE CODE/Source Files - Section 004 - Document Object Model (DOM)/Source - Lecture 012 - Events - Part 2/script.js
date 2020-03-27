// Lecture: Events - Part 2

/*
var h2 = document.querySelector('header h2');

// h2.addEventListener('click', function() {
//   console.log('Clicked');
// });

// h2.addEventListener('click', a);
// h2.addEventListener('click', b);

// function a() {
//   console.log('Clicked a');
// }

// function b() {
//   console.log('Clicked b');
// }

h2.addEventListener('click', a);

// function a(e) {
//   console.log(e.target);
// }

function a() {
  console.log(this);
}
*/
var h2 = document.querySelector('header h2')
h2.addEventListener('click', a)
// h2.addEventListener('click', b)
function a(e) {
  console.log(e); //give MouseEvent
  console.log(e.target);
}
// function a() {
//   console.log(this); //this also refer to object 
// }

// function b() {
//   console.log('clicked b');
// }

//Event reference Mozilla

var li = document.getElementById('list');

li.addEventListener('click', function () {
  console.log("ul clicked");
  console.log(this); //this refer to the global object li
})




