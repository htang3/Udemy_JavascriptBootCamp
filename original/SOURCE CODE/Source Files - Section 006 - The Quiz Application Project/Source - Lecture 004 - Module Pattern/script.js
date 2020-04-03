// Lecture: Module Pattern

/*
var quizController = (function() {

    var private = 10;

    var privateFn = function(a) {
        return a + private;
    }

    return {
        publicMethod: function() {
            return privateFn(20);
        }
    }

})();

console.log(quizController.publicMethod());


var UIController = (function() {

    var num1 = 30;

    return {
        sum: function(num2) {
            return num1 + num2;
        }
    }

})();


var controller = (function(quizCtrl, UICtrl) {

    console.log(UICtrl.sum(100) + quizCtrl.publicMethod());

})(quizController, UIController);
*/

//use IIFE 
var quizController = (function () { // works with data
    var private = 10;
    var privateFn = function (a) {
        return a + private;
    }
    return { //because closure, we can access privateFn
        publicMethod: function () {
            return privateFn(20)
        }
    }
})();
// UI will receive data from quizController
var UIController = (function () {
    var num1 = 30;
    return {
        sum: function (num2) {
            return num1 + num2;
        }
    }
})();

var controller = (function (quizCtrl, UICtrl) {
    console.log(UICtrl.sum(100) + quizController.publicMethod(30)); //130
})(quizController, UIController);









