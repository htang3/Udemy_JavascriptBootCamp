// Lecture: DOM Navigation


var listItem = document.getElementById('list-item');// get the 2nd list elemen

console.log(listItem.parentNode); // get parent => ul
console.log(listItem.parentNode.parentNode);// <div class note-list
console.log(listItem.parentElement); // same as parentNode => ul
console.log(listItem.parentElement.style.background = 'orange'); //=> change the style of ul orange

console.log(listItem.childNodes) //+>Nodelist (paragraph...text node is white space)
console.log(listItem.children); //-> HTMLCollection only return element

console.log(listItem.firstChild); // -> #text is the white space
console.log(listItem.firstElementChild); // -> return the first element, ignore white space

console.log(listItem.lastChild); //->#text
console.log(listItem.lastElementChild);// -> return last element

console.log(listItem.previousSibling); //-> white space
console.log(listItem.previousElementSibling);//-> return the previous element 
console.log(listItem.nextElementSibling); //return next element



















