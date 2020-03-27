// Lecture: Get And Manipulate On Multiple Elements - Part 1


var icons = document.getElementsByClassName('fa');
console.log(icons); //HTMLCollection(6) not an Array
console.log(icons[0]);
console.log(icons[1]);

for (var i = 0; i < icons.length; i++) {
    console.log(icons[i]); // use the same syntax as array but not Array
}

//icons.push('Hello'); //throw error
var iconsArr = Array.from(icons);
console.log(iconsArr); //copy element in icons HTMLcollection to Array
console.log(icons); // HTML Collection

iconsArr.push("Hello"); // push new element in iconsArr
console.log(iconsArr);

var noteLi = document.getElementsByClassName('note-list')
console.log(noteLi); //div.note-list

console.log(document.getElementsByClassName('randome'));




//getElementByClassName('classname') return HTMLCollection with the same classname
//access element like array[i] but NOT an array
//to convert: use Array.from(HTMLCollection)

//getElementsByClassName('none existed class') // empty HTMLCollection













