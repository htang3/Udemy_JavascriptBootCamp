// Lecture: Creating Elements


// var newEl = document.createElement('button');

// console.log(newEl);

// var text = document.createTextNode('Click');

// // console.log(text);

// newEl.appendChild(text);

// newEl.setAttribute('style', 'display: block; margin: 10px auto; padding: 5px 10px; background: coral; color: #fff;');

// console.log(newEl);

// var form = document.getElementById('add');

// // form.appendChild(newEl);

// form.insertBefore(newEl, form.children[0]);

// newEl.parentElement.removeChild(newEl);


var newEl = document.createElement('button')
console.log(newEl); //create <button></button> is an object
newEl.classList.add('btnn')
console.log(newEl.getAttribute('class'));
newEl.setAttribute('id', 'newElbtnn')

var text = document.createTextNode('new Element');
console.log(text); // "text" is an object

newEl.appendChild(text);
newEl.setAttribute('style', 'display: block; margin: 10px auto; padding: 5px 10px; background: coral;')
console.log(newEl); //<button>new Element</button>

var form = document.getElementById('add')
form.appendChild(newEl) //add newEl button
//use insertBefore
form.insertBefore(newEl, form.children[0]) // new element insert before first children of form

//to remove newEl, first access the parent then use removeChild method
//newEl.parentElement.removeChild(newEl)










