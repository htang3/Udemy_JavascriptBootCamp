// Lecture: Project - Coding Task 3
var input = document.getElementById('add-input')
console.log(input.value);
var bttn = document.getElementById('add-btn')
bttn.addEventListener('click', function (e) {

    if (input.value === "") {
        alert("must enter some words")
    }
    else {
        console.log('clicked');
        e.preventDefault()
        p.appendChild(document.createTextNode(input.value));
        newEl.appendChild(p)
        anotherP.appendChild(i)
        anotherP.appendChild(i2)
        newEl.appendChild(anotherP)
        newEl.appendChild(input2)
        console.log('new element: ' + newEl);
        list.appendChild(newEl)
        input.value = ""; //after adding to the list, reset input to empty string

    }

})

var newEl = document.createElement('li');
var p = document.createElement('p')
var anotherP = document.createElement('p');
var i = document.createElement('i');
var i2 = document.createElement('i')
i.className = 'fa fa-pencil-square-o';
i2.className = "fa fa-times";
var input2 = document.createElement('input') // input in li
input2.className = 'edit-note';
input2.setAttribute('type', 'text')
console.log(input2);

var list = document.getElementById('list');
console.log(list);
// var list1 = document.querySelector('ul') SAME AS list ABOVE
// console.log(list1);









