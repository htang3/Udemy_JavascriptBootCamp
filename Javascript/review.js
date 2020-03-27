console.log("From review.js_________________");
var message = "Hello from script.js";
function myFunc() {
    document.getElementById("body").innerHTML = message;
}
myFunc();


var Student = {};
console.log(Student)//
Student.name = "Hung";
var lname = 'lastname';
Student[lname] = "Tang";
Student.address = { street: 'Spiro', zip: "95116" }
console.log(Student.address.street);//

var arr = ['honda', 'bmw', 'toyota'];
arr.unshift('Huyndai');
console.log(arr);
arr.pop()
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}