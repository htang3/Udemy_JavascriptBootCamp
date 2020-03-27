// Lecture: Get And Manipulate On Individual Elements - Part 1

console.log(document.getElementById("list"));
// => <ul id="list">lis... here</ul>
var el = document.getElementById("list")
console.log(el); //// => <ul id="list">lis... here</ul>
console.log(typeof el); //=> Object

//SET HEADER SAME id="list" => RETURN THE FIRST ELEMENT WITH id="list"
var el = document.getElementById("list"); // return <h2 id="list">Note Manager</h2>
console.log(el);
//in this case, it is the header

//GET the id does NOT Existed, ALWAYS get null 
var el1 = document.getElementById("LIST");
console.log(el1); // null in the console

//PROPERTIES
//.textContent  //.innerHTML
//********The textContent sets or returns the textual content of the specified node,
// and all its descendants
var el2 = document.getElementById("list")
console.log(el2.textContent); //the content of the unordered list
//First note
//Second note
//Third note

//USE textContent can set new element for the ul node
// var elnew = document.getElementById("list")
// elnew.textContent = "Hello" //ul == "Hello"

var heading = document.getElementById("heading").textContent
console.log(heading); // Note Manager

// var ulElement = document.getElementById("list");
// ulElement.textContent = heading // make the content of the list == textContent of heading

//***********innerHTML set or return the HTML content including tags, attributes, and text node as string
var ele = document.getElementById("list")
console.log(ele.innerHTML);
{/* <li>
    <p>First note</p>
    <p><i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i></p>
    <input class="edit-note" type="text">
				</li>
    <li>
        <p>Second note</p>
        <p><i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i></p>
        <input class="edit-note" type="text">
				</li>
        <li>
            <p>Third note</p>
            <p><i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i></p>
            <input class="edit-note" type="text">
				</li> */}

ele.innerHTML = "Use innerHTML for list" //all the list change to "Use innerHTML for list"
ele.innerHTML = "<h1>Hello</h1>" // Make the Hello as h1 tag
ele.textContent = "<h1>Hi</h1>" // return <h1>Hi</h1>

//getElementById return the element with the specified id
// if two element has the same id, getElementById return the first element
//if id not existed, getElementById return null
//element.textContent set and return the textual content of the element
//element.innerHTML set and return the HTML content including tags, attribute and string




