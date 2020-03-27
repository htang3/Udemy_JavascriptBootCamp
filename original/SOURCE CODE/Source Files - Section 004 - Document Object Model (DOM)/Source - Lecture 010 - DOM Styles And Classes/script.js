// Lecture: DOM Styles And Classes


var h2 = document.querySelector('h2');
console.log(h2);
h2.className = 'changeBg';
//when assign new class nam changeFt, it removes the previous className 'changeBg'
h2.className = 'changeFt'; //add change Font to h2
h2.className += ' changeFt'; //add changeFt without removing changeBg


console.log(h2.className);
// console.log(typeof h2.className);

// // var a = 10;
// // a += 20;
// // a = a + 20;
// // console.log(a);

h2.classList.add('changeFt'); // same as h2.className += 'changeFt'
h2.classList.remove('changeBg');

h2.classList.toggle('changeBg');
// remove if it're present, add if it's NOT present


console.log(h2.classList);











