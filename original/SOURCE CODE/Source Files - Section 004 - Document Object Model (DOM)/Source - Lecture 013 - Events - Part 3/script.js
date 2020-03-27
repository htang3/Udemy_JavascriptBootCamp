// Lecture: Events - Part 3

/*
// var h2 = document.querySelector('header h2');

// h2.addEventListener('click', function() {
//   a(5, 10);
// });

// function a(x, y) {
//   console.log(x * y);
// }

// var div = document.querySelector('div.wrapper');
// var header = document.querySelector('header');
// var h2 = document.querySelector('header h2');

// div.addEventListener('click', function() {
//   var delay = new Date().getTime() + 1000;
//   while(new Date() < delay) {}
//   console.log('From div');
// }, true);

// header.addEventListener('click', function() {
//   var delay = new Date().getTime() + 1000;
//   while(new Date() < delay) {}
//   console.log('From header');
// }, true);

// h2.addEventListener('click', function() {
//   var delay = new Date().getTime() + 1000;
//   while(new Date() < delay) {}
//   console.log('From h2');
// }, true);

// var h2 = document.querySelector('header h2');

// h2.addEventListener('click', function() {
//     console.log('From click event');
//   });

//   function a() {
//     var delay = new Date().getTime() + 3000;
//     while(new Date() < delay) {}
//     console.log('From function a');
//   }

//   a();

//   console.log('Global code is executed');
*/

// var h2 = document.querySelector('header h2');

// h2.addEventListener('click', function () { //use ananomously functions
//     a(5, 10);
// });

// function a(x, y) {
//     console.log(x * y); // onlick => 50
// }

// var div = document.querySelector('div.wrapper');
// var header = document.querySelector('header');
// var h2 = document.querySelector('header h2');

// div.addEventListener('click', function () {
//     var delay = new Date().getTime() + 1000;
//     while (new Date() < delay) { } //when a function is execute, it will delay 1 s
//     console.log(
//         'from div'
//     );
// }, false)
// header.addEventListener('click', function () {
//     var delay = new Date().getTime() + 1000;
//     while (new Date() < delay) { } //when a function is execute, it will delay 1 s
//     console.log(
//         'from header'
//     );
// }, false)
// h2.addEventListener('click', function () {
//     var delay = new Date().getTime() + 1000;
//     while (new Date() < delay) { } //when a function is execute, it will delay 1 s
//     console.log(
//         'from h2'
//     );
// }, false)

//Event execute h2 then header, and div********
// if we change addEventListener third parameter to true, => div, header, h2
//This happens because of event capturing

var h2 = document.querySelector('header h2');

h2.addEventListener('click', function () {
    console.log('From click event');
});

function a() {
    var delay = new Date().getTime() + 3000;
    while (new Date() < delay) { }
    console.log('From function a');
}

a();
console.log('Global code is executed');

// Output: From function a, Global code is executed, From click event
//Because Global Execution Context created, then Local Execution Context(function a)
//Once function a() executed, clg, then event listenner