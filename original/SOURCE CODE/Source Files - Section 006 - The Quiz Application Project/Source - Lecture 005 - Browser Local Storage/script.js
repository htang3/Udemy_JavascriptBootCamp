// // Lecture: Browser Local Storage


// /*******************************
// *********QUIZ CONTROLLER********
// *******************************/
// var quizController = (function() {

//     // localStorage.setItem('data', [1, 2, 3, 4]);
//     localStorage.setItem('data', JSON.stringify([1, 2, 3, 4]));
//     localStorage.setItem('data', JSON.stringify({name: 'John'}));
//     localStorage.removeItem('data');
//     console.log(JSON.parse(localStorage.getItem('data')));
//     // console.log(localStorage.getItem('data'));
//     // console.log(typeof localStorage.getItem('data'));

// })();

// /*******************************
// **********UI CONTROLLER*********
// *******************************/
// var UIController = (function() {



// })();

// /*******************************
// ***********CONTROLLER***********
// *******************************/
// var controller = (function(quizCtrl, UICtrl) {



// })(quizController, UIController);

//use IIFE 
var quizController = (function () { // works with data
    localStorage.setItem("data", JSON.stringify([1, 2, 3, 4])) //open console, application, local storage
    //remove Items
    localStorage.removeItem('data') // data will be removed
    console.log(JSON.parse(localStorage.getItem('data'))); //typeof String

})();
// UI will receive data from quizController
var UIController = (function () {

})();
//CONTROLLER
var controller = (function (quizCtrl, UICtrl) {

})(quizController, UIController);









