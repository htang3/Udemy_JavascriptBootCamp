// Lecture: Get And Manipulate On Multiple Elements - Part 3


var lis = document.querySelectorAll('li, h2, #hide-list'); //multiple selector
console.log(lis); // return NodeList: object
//Nodelist allow to use array method
///lis.push('Hello'); will throw errors

lis.forEach(function (li) { // will print out list, NOT throw error
    console.log(li);
});

Array.from(lis).forEach(function (li) { //Nodelist allow to use forEach method in array
    //make all the list content to Hello World
    console.log(li); // still print Hello
    li.textContent = "Hello"
    li.innerHTML = "hi"

    console.log(li.innerText);
});

var div = document.querySelectorAll('div.wrapper')// get class
console.log(div);
var li = document.querySelector('li');// return the first element
console.log(li);

//querySelectorAll return all element specified in param in order




